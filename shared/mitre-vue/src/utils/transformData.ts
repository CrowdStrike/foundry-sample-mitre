import type { ApiResponsePayload } from '@crowdstrike/foundry-js'
import {
  Severity,
  SeverityMapping,
  isSeverityAggregate,
  isTacticAggregate,
  isTechniqueAggregate,
  isTrendAggregate,
  type MatrixMapResponse,
  type SeverityAggregate,
  type SeverityDetail,
  type SeverityRawData,
  type Tactic,
  type TacticAggregate,
  type TacticDefinition,
  type Technique,
  type TechniqueAggregate,
  type TechniqueDefinition,
  type TrendAggregate
} from './types'

/**
 * Empty placeholder
 *
 * @type {"N/P"}
 */
const EmptyID = 'N/P'

/**
 * Match label to severity value
 *
 * @param {string} label
 * @returns {Severity}
 */
function matchLabelToSeverity(label: string): Severity {
  return SeverityMapping[label] ?? Severity.UNKNOWN
}

/**
 * Calculate the trend over passed buckets
 *
 * @param {TrendAggregate} trendAggregate
 * @param {Date} from
 * @param {Date} to
 * @returns {number}
 */
export function calculateTrend(trendAggregate: TrendAggregate, from: Date, to: Date): number {
  if (trendAggregate.buckets?.length === 0) {
    return 0
  } else if (trendAggregate.buckets?.length === 1) {
    // We need to discriminate if it's more a "previous" or a "current" value as
    // we have no detection in one of the time range but we don't know which one,
    // this is why we need dates here. We split the time range in two and see if it
    // falls in the first range or the second one
    const middleValue = Math.round((from.getTime() + to.getTime()) / 2)

    if (trendAggregate.buckets[0].label < middleValue) {
      // This is a previous value, so we have a 100% decrease here
      return -1
    } else {
      // This is a current value, so we have a 100% increase here
      return 1
    }
  } else if (trendAggregate.buckets?.length === 2) {
    const previousValue = trendAggregate.buckets?.[0]?.count ?? 0
    const currentValue = trendAggregate.buckets?.[1]?.count ?? 0
    return previousValue !== 0 ? (previousValue - currentValue) / previousValue : 1
  }

  return 0
}

/**
 * Retrieve the higher passed severity within a list of passed severities
 *
 * @param {SeverityDetail} severities
 * @returns {Severity}
 */
function retrieveHigherSeverity(severities: SeverityDetail): Severity {
  if (severities[Severity.CRITICAL] > 0) {
    return Severity.CRITICAL
  } else if (severities[Severity.HIGH] > 0) {
    return Severity.HIGH
  } else if (severities[Severity.MEDIUM] > 0) {
    return Severity.MEDIUM
  } else if (severities[Severity.LOW] > 0) {
    return Severity.LOW
  } else if (severities[Severity.INFORMATIONAL] > 0) {
    return Severity.INFORMATIONAL
  }

  return Severity.UNKNOWN
}

/**
 * Convert severities to mapped severity counts and higher severity
 *
 * @param {Array<SeverityRawData>} severities
 * @returns {{
  severity: Severity
  severity_details: SeverityDetail
}}
 */
function convertRawSeverity(severities: Array<SeverityRawData>): {
  severity: Severity
  severity_details: SeverityDetail
} {
  const severity_details: SeverityDetail = {
    [Severity.CRITICAL]: 0,
    [Severity.HIGH]: 0,
    [Severity.MEDIUM]: 0,
    [Severity.LOW]: 0,
    [Severity.INFORMATIONAL]: 0,
    [Severity.UNKNOWN]: 0
  }

  severities.forEach((rawSeverity) => {
    severity_details[matchLabelToSeverity(rawSeverity.label)] = rawSeverity.count
  })

  const severity = retrieveHigherSeverity(severity_details)

  return { severity_details, severity }
}

/**
 * Map a tactic object through Id
 *
 * @param {string} id
 * @param {MatrixMapResponse} matrixMapInfos
 * @returns {(TacticDefinition | undefined)}
 */
function mapTacticById(
  id: string,
  matrixMapInfos: MatrixMapResponse
): TacticDefinition | undefined {
  return Object.values(matrixMapInfos.tactics).find(
    (tactic) => tactic.id.toLowerCase() === id.toLowerCase()
  )
}

/**
 * Map a technique object through Id
 *
 * @param {string} id
 * @param {MatrixMapResponse} matrixMapInfos
 * @returns {(TechniqueDefinition | undefined)}
 */
function mapTechniqueById(
  id: string,
  matrixMapInfos: MatrixMapResponse
): TechniqueDefinition | undefined {
  return Object.values(matrixMapInfos.techniques).find(
    (technique) => technique.id.toLowerCase() === id.toLowerCase()
  )
}

/**
 * Aggregate subtechniques enriching it with severity details, trend and other information
 *
 * @param {Technique[]} techniques
 * @param {boolean} showTrends
 * @returns {Technique[]}
 */
function aggregateSubTechniques(techniques: Technique[], showTrends: boolean): Technique[] {
  const mainTechniques = techniques.filter((technique) => !technique.is_subtechnique)

  techniques
    .filter((technique) => technique.is_subtechnique)
    .reduce((mainTechniques, technique) => {
      const parent_technique_id: string = technique.parent_technique_id as string
      const parent_technique_definition: TechniqueDefinition =
        technique.parent_technique_definition as TechniqueDefinition

      if (parent_technique_id && parent_technique_definition) {
        let parentTechniqueRef = mainTechniques.find(
          (parentTechnique) => parentTechnique.id === technique.parent_technique_id
        )

        if (!parentTechniqueRef) {
          const fullId = `${technique.tactic_id}.${parent_technique_id}`

          parentTechniqueRef = {
            label: parent_technique_definition?.name ?? technique.parent_technique_id,
            id: fullId,
            technique_id: parent_technique_id,
            detections_number: 0,
            tactic: technique.tactic_definition?.name ?? technique.tactic_id,
            tactic_id: technique.tactic_id,
            severity: technique.severity,
            severity_details: {
              critical: 0,
              high: 0,
              medium: 0,
              low: 0,
              informational: 0,
              unknown: 0
            },
            technique_definition: parent_technique_definition,
            tactic_definition: technique.tactic_definition,
            is_subtechnique: false
          }

          mainTechniques.push(parentTechniqueRef)
        }

        parentTechniqueRef.severity_details = {
          critical:
            (parentTechniqueRef.severity_details?.critical ?? 0) +
            (technique.severity_details?.critical ?? 0),
          high:
            (parentTechniqueRef.severity_details?.high ?? 0) +
            (technique.severity_details?.high ?? 0),
          medium:
            (parentTechniqueRef.severity_details?.medium ?? 0) +
            (technique.severity_details?.medium ?? 0),
          low:
            (parentTechniqueRef.severity_details?.low ?? 0) +
            (technique.severity_details?.low ?? 0),
          informational:
            (parentTechniqueRef.severity_details?.informational ?? 0) +
            (technique.severity_details?.informational ?? 0),
          unknown:
            (parentTechniqueRef.severity_details?.unknown ?? 0) +
            (technique.severity_details?.unknown ?? 0)
        }

        parentTechniqueRef.severity = retrieveHigherSeverity(parentTechniqueRef.severity_details)

        parentTechniqueRef.detections_number += technique.detections_number

        if (!parentTechniqueRef.sub_techniques) {
          parentTechniqueRef.sub_techniques = []
        }

        const subTechnique: Technique = {
          id: technique.id,
          label: technique.label,
          detections_number: technique.detections_number,
          severity: technique.severity,
          severity_details: technique.severity_details,
          technique_id: technique.technique_id,
          tactic_id: technique.tactic_id,
          tactic: String(technique.tactic_definition?.name),
          technique_definition: technique.technique_definition,
          parent_technique_id: technique.parent_technique_id,
          parent_technique_definition: technique.parent_technique_definition,
          tactic_definition: technique.tactic_definition,
          trend: technique.trend,
          is_subtechnique: true
        }

        parentTechniqueRef.sub_techniques.push(subTechnique)

        if (showTrends) {
          parentTechniqueRef.trend =
            parentTechniqueRef.sub_techniques.reduce(
              (trend, subtechnique) => trend + (subtechnique.trend ?? 0),
              0
            ) / parentTechniqueRef.sub_techniques.length
        }
      }

      return mainTechniques
    }, mainTechniques)

  return mainTechniques
}

/**
 * Transform the retrieved data into a more structured format
 *
 * @export
 * @template T
 * @param {Date} from
 * @param {Date} to
 * @param {ApiResponsePayload<T>} data
 * @param {MatrixMapResponse} matrixMapInfos
 * @param {boolean} showTrends
 * @param {boolean} showSubTechniques
 * @returns {Tactic[]}
 */
export default function transformData<T extends TacticAggregate>(
  from: Date,
  to: Date,
  data: ApiResponsePayload<T>,
  matrixMapInfos: MatrixMapResponse,
  showTrends: boolean,
  showSubTechniques: boolean
): Tactic[] {
  if (data?.resources?.length && matrixMapInfos) {
    const tacticAggregate: TacticAggregate = data?.resources?.find((item) =>
      isTacticAggregate(item)
    ) as TacticAggregate

    const rawTactics = tacticAggregate?.buckets ?? []

    return rawTactics.map((rawTactic) => {
      const techniqueSubAggregate: TechniqueAggregate = rawTactic.sub_aggregates.find((item) =>
        isTechniqueAggregate(item)
      ) as TechniqueAggregate

      const trendAggregate: TrendAggregate = rawTactic.sub_aggregates.find(
        (item) => item.name === 'TrendData'
      ) as TrendAggregate

      const severityAggregate: SeverityAggregate = rawTactic.sub_aggregates.find((item) =>
        isSeverityAggregate(item)
      ) as SeverityAggregate

      const techniquesBuckets = techniqueSubAggregate?.buckets ?? []

      const { severity, severity_details } = convertRawSeverity(severityAggregate?.buckets)

      const tacticId = rawTactic.label || EmptyID

      const tactic_definition = mapTacticById(tacticId, matrixMapInfos)

      console.assert(tactic_definition !== undefined, `Tactic with ID ${tacticId} was not found`)

      let techniques = techniquesBuckets.map((rawTechnique): Technique => {
        const severityAggregate: SeverityAggregate = rawTechnique.sub_aggregates.find((item) =>
          isSeverityAggregate(item)
        ) as SeverityAggregate

        const trendAggregate: TrendAggregate = rawTechnique.sub_aggregates.find((item) =>
          isTrendAggregate(item)
        ) as TrendAggregate

        const { severity, severity_details } = convertRawSeverity(severityAggregate?.buckets)

        const techniqueId = rawTechnique.label || EmptyID
        const fullId = `${tacticId}.${techniqueId}`

        const technique_definition = mapTechniqueById(techniqueId, matrixMapInfos)

        console.assert(
          technique_definition !== undefined,
          `Technique with ID ${techniqueId} was not found`
        )

        const is_subtechnique = techniqueId.includes('.')
        const parent_technique_id = is_subtechnique ? techniqueId.split('.')[0] : undefined

        const technique: Technique = {
          label: technique_definition?.name ?? techniqueId,
          id: fullId,
          technique_id: techniqueId,
          detections_number: rawTechnique.count,
          tactic: tactic_definition?.name ?? tacticId,
          tactic_id: tacticId,
          severity,
          severity_details,
          technique_definition,
          tactic_definition,
          is_subtechnique,
          parent_technique_id,
          parent_technique_definition: parent_technique_id
            ? mapTechniqueById(parent_technique_id, matrixMapInfos)
            : undefined
        }

        if (trendAggregate && showTrends) {
          technique.trend = calculateTrend(trendAggregate, from, to)
        }

        return technique
      })

      if (showSubTechniques) {
        techniques = aggregateSubTechniques(techniques, showTrends)
      }

      const tactic: Tactic = {
        label: tactic_definition?.name ?? tacticId,
        id: tacticId,
        techniques: techniques,
        detections_number: rawTactic.count,
        severity,
        severity_details,
        tactic_definition
      }

      if (trendAggregate && showTrends) {
        tactic.trend = calculateTrend(trendAggregate, from, to)
      }

      return tactic
    })
  }

  return [] as Tactic[]
}
