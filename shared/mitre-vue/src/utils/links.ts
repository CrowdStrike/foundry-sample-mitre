import { type Technique, type TimeRangeValue, type DetectionItem, TimeRangesLabels } from './types'

/**
 * The base page for the detections (internal)
 *
 * @type {"activity-v2/detections"}
 */
const DETECTIONS_BASE_PAGE = '/activity-v2/detections'
/**
 * The base hostname for the mitre website (external)
 *
 * @type {"https://attack.mitre.org"}
 */
const MITRE_BASE_URL = 'https://attack.mitre.org'
/**
 * The base URL to build techniques link (external)
 *
 * @type {string}
 */
const MITRE_TECHNIQUES_BASE_URL = `${MITRE_BASE_URL}/techniques/`
/**
 * The base URL to build tactics link (external)
 *
 * @type {string}
 */
const MITRE_TACTICS_BASE_URL = `${MITRE_BASE_URL}/tactics/`
/**
 * The base URL to the hosts detail page (internal)
 *
 * @type {"/host-management/hosts"}
 */
const HOSTNAME_BASE_PAGE = '/host-management/hosts'

/**
 * Calculate the technique ID in the mitre's website format
 *
 * @export
 * @param {(Technique | DetectionItem)} param
 * @returns {*}
 */
export function calculateTechniqueIdForMitreURL(param: Technique | DetectionItem) {
  if (param.technique_id) {
    return param.technique_id.replace('.', '/')
  } else {
    return ''
  }
}

/**
 * Return the "detections list" link with the related filters applied (internal)
 *
 * @export
 * @param {?Technique} [technique]
 * @param {?TimeRangeValue} [selectedTime]
 * @returns {string}
 */
export function calculateDetectionsLink(technique?: Technique, selectedTime?: TimeRangeValue) {
  const timeRange = selectedTime ? TimeRangesLabels[selectedTime] : null
  const params = [
    technique?.label ? `technique:'${technique.label}'` : null,
    ...(technique?.sub_techniques ?? []).map((subTechnique) =>
      subTechnique.label ? `technique:'${subTechnique.label}'` : null
    ),
    technique?.tactic ? `tactic:'${technique.tactic}'` : null,
    timeRange ? `timestamp:'${timeRange}'` : null
  ].filter((element) => element !== null)

  if (params.length) {
    return `${DETECTIONS_BASE_PAGE}?filter=${encodeURIComponent(params.join('+'))}`
  } else {
    return DETECTIONS_BASE_PAGE
  }
}

/**
 * Returns the full URL to the technique/subtechnique details page on the Mitre website (external)
 *
 * @export
 * @param {?(Technique | DetectionItem)} [param]
 * @returns {string}
 */
export function calculateMitreTechniqueUrl(param?: Technique | DetectionItem) {
  return param?.technique_id
    ? `${MITRE_TECHNIQUES_BASE_URL}/${calculateTechniqueIdForMitreURL(param)}`
    : ''
}

/**
 * Returns the full URL to the tactic details page on the Mitre website (external)
 *
 * @export
 * @param {?(Technique | DetectionItem)} [param]
 * @returns {string}
 */
export function calculateMitreTacticUrl(param?: Technique | DetectionItem) {
  return param?.tactic_id ? `${MITRE_TACTICS_BASE_URL}/${param.tactic_id}` : ''
}

/**
 * Returns the full URL to the host's detail page (internal)
 *
 * @export
 * @param {?DetectionItem} [param]
 * @returns {string}
 */
export function calculateHostNameRef(param?: DetectionItem) {
  return param?.device
    ? `${HOSTNAME_BASE_PAGE}/${param.device?.device_id}?filter=device_id:%27${param.device?.device_id}%27`
    : ''
}
