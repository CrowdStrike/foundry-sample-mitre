/**
 * Mitre Chart Pinia Store
 */
import type FalconApi from '@crowdstrike/foundry-js'
import {
  reorderItems,
  retrieveData,
  retrieveMitreMatrixMap,
  transformData
} from '@mitre/vue-shared/utils'
import type { MitreType } from '@mitre/vue-shared/utils/retrieveMitreMatrixMap'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import {
  TimeRanges,
  type ContentType,
  type DetectionInfos,
  type MatrixMapResponse,
  type Tactic,
  type TacticAggregate,
  type Technique,
  type TimeRangeValue
} from '@mitre/vue-shared/types'
import debounce from 'lodash.debounce'
import { defineStore } from 'pinia'
import { computed, inject, reactive, ref } from 'vue'

/**
 * Mitre Chart Store initializer
 *
 * @type {*}
 */
export const useMatrixChartStore = defineStore('matrix-chart', () => {
  const loadingError = ref()
  const firstLoadDone = ref(false)
  const isLoading = ref(false)
  const detections = ref<DetectionInfos>()
  const tactics = ref([] as Tactic[])
  const techniquesMapping = new Map<string, Technique>()
  const expanded_techniques_ids = reactive({} as Record<string, boolean>)
  const showTrends = ref(true)
  const showSubtechniques = ref(true)
  const timeRange = ref('1d' as TimeRangeValue)
  const selectedTechnique = ref<Technique>()
  let matrixMappingCache: MatrixMapResponse | undefined = undefined
  const mitreType = ref<MitreType>('enterprise')
  const filterCS = ref(true)
  const contentType = ref<ContentType>('enterprise')

  const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

  /**
   * Set current Mitre type
   *
   * @param {ContentType} value
   */
  const setContentType = (value: ContentType) => {
    contentType.value = value
    reloadData()
  }

  /**
   * Loaded Tactics
   *
   * @type {*}
   */
  const loadedTactics = computed(() => {
    return tactics.value ?? []
  })

  /**
   * Loaded Detections
   *
   * @type {*}
   */
  const loadedDetections = computed(() => {
    return detections.value ?? []
  })

  /**
   * Current expanded techniques state
   *
   * @type {*}
   */
  const expandedTechniques = computed(() => {
    return Object.keys(expanded_techniques_ids ?? {})
  })

  /**
   * From Date for the chart
   *
   * @type {*}
   */
  const from = computed(() => {
    return new Date(to.value.getTime() - subtractTime.value)
  })

  /**
   * To Date for the chart
   *
   * @type {*}
   */
  const to = computed(() => {
    return new Date()
  })

  /**
   * Time range
   *
   * @type {*}
   */
  const subtractTime = computed(() => {
    return TimeRanges[timeRange.value] ?? 0
  })

  /**
   * Gets the Matrix Mapping object (cached)
   *
   * @async
   * @returns {unknown}
   */
  const getMatrixMapping = async () => {
    if (matrixMappingCache) {
      return matrixMappingCache
    } else {
      const mapping = await retrieveMitreMatrixMap(falconApi)
      if (mapping) {
        matrixMappingCache = mapping
      }
      return mapping
    }
  }

  /**
   * Set techniques mapping from passed tactics
   *
   * @param {Tactic[]} tactics
   */
  const setTechniqueMapping = (tactics: Tactic[]) => {
    tactics.forEach((tactic) => {
      tactic.techniques.forEach((technique) => {
        if (technique?.technique_definition) {
          techniquesMapping.set(technique?.technique_definition.id, technique)
        }

        if (technique?.sub_techniques?.length) {
          technique.sub_techniques.forEach((subTechnique) => {
            techniquesMapping.set(subTechnique.id, subTechnique)
          })
        }
      })
    })
  }

  /**
   * Reload Mitre data after some parameter change
   *
   * @type {*}
   */
  const reloadData = debounce(async () => {
    try {
      isLoading.value = true

      clearSelected()

      const mapping = await getMatrixMapping()

      if (mapping) {
        const data = await retrieveData<TacticAggregate>(
          falconApi,
          timeRange.value,
          showTrends.value,
          mapping,
          filterCS.value
        )

        if (data) {
          const rawTactics = transformData<TacticAggregate>(
            from.value,
            to.value,
            data,
            mapping,
            showTrends.value,
            showSubtechniques.value
          )

          const sortedTactics = reorderItems(rawTactics, showSubtechniques.value)

          tactics.value = sortedTactics
          setTechniqueMapping(tactics.value)
        }
      }

      firstLoadDone.value = true
    } catch (error) {
      loadingError.value = error
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }, 200)

  /**
   * Toggle selected technique
   *
   * @param {string} id
   */
  const toggleTechnique = (id: string) => {
    if (id) {
      expanded_techniques_ids[id] = !expanded_techniques_ids[id]

      if (!expanded_techniques_ids[id]) {
        delete expanded_techniques_ids[id]
      }
    }
  }

  /**
   * Toggle the trends on/off and reload the data
   *
   * @param {?boolean} [value]
   */
  const toggleShowTrends = (value?: boolean) => {
    showTrends.value = value ?? !showTrends.value

    reloadData()
  }

  /**
   * Toggle the sub techniques on/off and reload the data
   *
   * @param {?boolean} [value]
   */
  const toggleShowSubtechniques = (value?: boolean) => {
    showSubtechniques.value = value ?? !showSubtechniques.value

    reloadData()
  }

  /**
   * Change the time range and reload the data
   *
   * @param {TimeRangeValue} newTimeRange
   */
  const changeTimeRange = (newTimeRange: TimeRangeValue) => {
    timeRange.value = newTimeRange

    reloadData()
  }

  /**
   * Select a technique (showing it in the side panel)
   *
   * @param {?Technique} [technique]
   */
  const selectTechnique = (technique?: Technique) => {
    if (selectedTechnique.value?.id === technique?.id) {
      selectedTechnique.value = undefined
    } else {
      selectedTechnique.value = technique
    }
  }

  /**
   * Change Mitre type and reload data (current implementation only covers the Enterprise Mitre Data)
   *
   * @param {MitreType} type
   */
  const changeMitreType = (type: MitreType) => {
    mitreType.value = type

    reloadData()
  }

  /**
   * Clear selected technique and detections
   */
  const clearSelected = () => {
    selectedTechnique.value = undefined
    detections.value = undefined
  }

  /**
   * Select a technique by Id
   *
   * @param {string} id
   */
  const selectTechniqueById = (id: string) => {
    const technique = techniquesMapping.get(id)
    if (technique) {
      selectTechnique(technique)
    }
  }

  return {
    contentType,
    setContentType,
    reloadData,
    toggleTechnique,
    toggleShowTrends,
    toggleShowSubtechniques,
    changeTimeRange,
    showTrends,
    showSubtechniques,
    from,
    to,
    timeRange,
    loadedTactics,
    isLoading,
    loadingError,
    expandedTechniques,
    selectTechnique,
    clearSelected,
    selectedTechnique,
    loadedDetections,
    firstLoadDone,
    changeMitreType,
    mitreType,
    selectTechniqueById
  }
})
