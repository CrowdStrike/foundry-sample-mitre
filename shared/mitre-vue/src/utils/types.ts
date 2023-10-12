/**
 * Severity Enum
 *
 * @export
 * @enum {number}
 */
export enum Severity {
  INFORMATIONAL = 'informational',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
  UNKNOWN = 'unknown'
}

/**
 * Severity detail structure
 *
 * @export
 * @interface SeverityDetail
 * @typedef {SeverityDetail}
 */
export interface SeverityDetail {
  /**
   * Number of critical detections
   *
   * @type {number}
   */
  [Severity.CRITICAL]: number
  /**
   * Number of high detections
   *
   * @type {number}
   */
  [Severity.HIGH]: number
  /**
   * Number of medium detections
   *
   * @type {number}
   */
  [Severity.MEDIUM]: number
  /**
   * Number of low detections
   *
   * @type {number}
   */
  [Severity.LOW]: number
  /**
   * Number of informational detections
   *
   * @type {number}
   */
  [Severity.INFORMATIONAL]: number
  /**
   * Number of unknown detections
   *
   * @type {number}
   */
  [Severity.UNKNOWN]: number
}

/**
 * Detection Icon color per severity
 *
 * @export
 * @typedef {DetectionIconColor}
 */
export type DetectionIconColor = Severity | 'default'
/**
 * Detection icon sizes
 *
 * @export
 * @typedef {DetectionIconSize}
 */
export type DetectionIconSize = 16 | 20 | 24
/**
 * Detection icon color classes
 *
 * @export
 * @typedef {DetectionIconColorClass}
 */
export type DetectionIconColorClass =
  | 'text-informational'
  | 'text-critical'
  | 'text-high'
  | 'text-medium'
  | 'text-low'
  | 'text-disabled'
  | 'text-titles-and-attributes'

/**
 * Numerical severity mapping
 *
 * @type {Record<string, Severity>}
 */
export const SeverityMapping: Record<string, Severity> = {
  '80.0-101.0': Severity.CRITICAL,
  '60.0-80.0': Severity.HIGH,
  '40.0-60.0': Severity.MEDIUM,
  '20.0-40.0': Severity.LOW,
  '0.0-20.0': Severity.INFORMATIONAL,
  '': Severity.UNKNOWN
}

/**
 * Severity precedence for ordering
 *
 * @type {{ critical: number; high: number; medium: number; low: number; informational: number; unknown: number; }}
 */
export const SeverityPrecedence = {
  [Severity.CRITICAL]: 1,
  [Severity.HIGH]: 2,
  [Severity.MEDIUM]: 3,
  [Severity.LOW]: 4,
  [Severity.INFORMATIONAL]: 5,
  [Severity.UNKNOWN]: 6
}

/**
 * Generic Data structure
 *
 * @export
 * @interface Data
 * @typedef {Data}
 */
export interface Data {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Other values
   */
  [x: string]: unknown
}

/**
 * Detection Infos Structure
 *
 * @export
 * @interface DetectionInfos
 * @typedef {DetectionInfos}
 */
export interface DetectionInfos {
  /**
   * Severity Detail
   *
   * @type {SeverityDetail}
   */
  severity_details: SeverityDetail
}

/**
 * Detection structure
 *
 * @export
 * @interface Detection
 * @typedef {Detection}
 */
export interface Detection {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Detection severity
   *
   * @type {Severity}
   */
  severity: Severity
  /**
   * Other values
   */
  [x: string]: unknown
}

/**
 * Technique structure
 *
 * @export
 * @interface Technique
 * @typedef {Technique}
 */
export interface Technique {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Technique Id
   *
   * @type {string}
   */
  technique_id: string
  /**
   * Technique Label
   *
   * @type {string}
   */
  label: string
  /**
   * Number of detections
   *
   * @type {number}
   */
  detections_number: number
  /**
   * Detections trend.
   * A positive value means that detections number increased relative to the previous time-span,
   * a negative one reflects a decrease of them over the previous time-span
   *
   * @type {?number}
   */
  trend?: number
  /**
   * Maximum severity
   *
   * @type {Severity}
   */
  severity: Severity
  /**
   * Tactic Id
   *
   * @type {string}
   */
  tactic_id: string
  /**
   * Tactic name
   *
   * @type {string}
   */
  tactic: string
  /**
   * List of sub techniques
   *
   * @type {?Technique[]}
   */
  sub_techniques?: Technique[]
  /**
   * Severity details
   *
   * @type {?SeverityDetail}
   */
  severity_details?: SeverityDetail
  /**
   * Tactic definition, as returned from the Mitre Map
   *
   * @type {?TacticDefinition}
   */
  tactic_definition?: TacticDefinition
  /**
   * Technique definition, as returned from the Mitre Map
   *
   * @type {?TechniqueDefinition}
   */
  technique_definition?: TechniqueDefinition
  /**
   * If it's a subtechnique or not. SubTechniques have a dot in their ids
   *
   * @type {boolean}
   */
  is_subtechnique: boolean
  /**
   * Parent technique Id (if it's a subtechnique)
   *
   * @type {?string}
   */
  parent_technique_id?: string
  /**
   * Parent technique definition, as returned from the Mitre Map (if it's a subtechnique)
   *
   * @type {?TechniqueDefinition}
   */
  parent_technique_definition?: TechniqueDefinition
}

/**
 * Tactic structure
 *
 * @export
 * @interface Tactic
 * @typedef {Tactic}
 */
export interface Tactic {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Tactic label
   *
   * @type {string}
   */
  label: string
  /**
   * Detections number
   *
   * @type {number}
   */
  detections_number: number
  /**
   * Detections trend.
   * A positive value means that detections number increased relative to the previous time-span,
   * a negative one reflects a decrease of them over the previous time-span
   *
   * @type {?number}
   */
  trend?: number
  /**
   * Severity
   *
   * @type {Severity}
   */
  severity: Severity
  /**
   * Techniques in this Tactic
   *
   * @type {Technique[]}
   */
  techniques: Technique[]
  /**
   * Severity Details
   *
   * @type {?SeverityDetail}
   */
  severity_details?: SeverityDetail
  /**
   * Tactic definition, as returned from the Mitre Map
   *
   * @type {?TacticDefinition}
   */
  tactic_definition?: TacticDefinition
}

/**
 * One hour in milliseconds
 *
 * @type {number}
 */
const oneHour = 60 * 60 * 1000

/**
 * Time ranges in milliseconds
 *
 * @type {Record<TimeRangeValue, number>}
 */
export const TimeRanges: Record<TimeRangeValue, number> = {
  '1h': oneHour,
  '1d': 24 * oneHour,
  '7d': 7 * 24 * oneHour,
  '30d': 30 * 24 * oneHour
} as const

/**
 * Time range labels
 *
 * @type {Record<TimeRangeValue, string>}
 */
export const TimeRangesLabels: Record<TimeRangeValue, string> = {
  '1h': 'Last hour',
  '1d': 'Last day',
  '7d': 'Last week',
  '30d': 'Last 30 days'
} as const

/**
 * Time range translations mapping
 *
 * @type {Record<string, string>}
 */
export const TimeRangesTranslations: Record<string, string> = {
  'Last hour': 'filterLastHour',
  'Last day': 'filterLastDay',
  'Last week': 'filterLastWeek',
  'Last 30 days': 'filterLastMonth'
}

/**
 * Time ranges selectable values
 *
 * @export
 * @typedef {TimeRangeValue}
 */
export type TimeRangeValue = '1h' | '1d' | '7d' | '30d'

/**
 * Severity Raw Data (as returned from API response after aggregation)
 *
 * @export
 * @interface SeverityRawData
 * @typedef {SeverityRawData}
 */
export interface SeverityRawData {
  /**
   * Severity Label
   *
   * @type {string}
   */
  label: string
  /**
   * Detections count
   *
   * @type {number}
   */
  count: number
  /**
   * To (timestamp)
   *
   * @type {number}
   */
  to: number
  /**
   * From (timestamp)
   *
   * @type {number}
   */
  from: number
}

/**
 * Trend raw data (as returned from API response after aggregation)
 *
 * @export
 * @interface TrendRawData
 * @typedef {TrendRawData}
 */
export interface TrendRawData {
  /**
   * Trend label
   *
   * @type {number}
   */
  label: number
  /**
   * Trend key (unused)
   *
   * @type {string}
   */
  key_as_string: string
  /**
   * Detections count
   *
   * @type {number}
   */
  count: number
}

/**
 * Tactic raw data (as returned from API response after aggregation)
 *
 * @export
 * @interface TacticRawData
 * @typedef {TacticRawData}
 */
export interface TacticRawData {
  /**
   * Tactic label
   *
   * @type {string}
   */
  label: string
  /**
   * Detections count
   *
   * @type {number}
   */
  count: number
  /**
   * Sub Aggregates
   *
   * @type {Array<SeverityAggregate | TechniqueAggregate | TrendAggregate>}
   */
  sub_aggregates: Array<SeverityAggregate | TechniqueAggregate | TrendAggregate>
}

/**
 * Technique Raw Data (as returned from API response after aggregation)
 *
 * @export
 * @interface TechniqueRawData
 * @typedef {TechniqueRawData}
 */
export interface TechniqueRawData {
  /**
   * Technique Label
   *
   * @type {string}
   */
  label: string
  /**
   * Detections count
   *
   * @type {number}
   */
  count: number
  /**
   * Sub Aggregates
   *
   * @type {Array<SeverityAggregate | TrendAggregate | SubTechniqueAggregate>}
   */
  sub_aggregates: Array<SeverityAggregate | TrendAggregate | SubTechniqueAggregate>
}

/**
 * Aggregate (as returned from API response)
 *
 * @interface Aggregate
 * @typedef {Aggregate}
 */
interface Aggregate {
  /**
   * Aggregation name/type
   *
   * @type {string}
   */
  name: string
  /**
   * Buckets
   *
   * @type {unknown[]}
   */
  buckets: unknown[]
}

/**
 * Detection Item Raw Data as returned from API response (partial definition)
 *
 * @export
 * @interface DetectionItem
 * @typedef {DetectionItem}
 * @extends {Record<string, unknown>}
 */
export interface DetectionItem extends Record<string, unknown> {
  /**
   * Detection's Id
   *
   * @type {string}
   */
  id: string
  /**
   * Detection's tactic label
   *
   * @type {string}
   */
  tactic: string
  /**
   * Detection's tactic id
   *
   * @type {string}
   */
  tactic_id: string
  /**
   * Detection's technique label
   *
   * @type {string}
   */
  technique: string
  /**
   * Detection's technique id
   *
   * @type {string}
   */
  technique_id: string
  /**
   * Detection's description
   *
   * @type {string}
   */
  description: string
  /**
   * Detection's device information
   *
   * @type {{
      device_id: string
      hostname: string
    }}
   */
  device: {
    device_id: string
    hostname: string
  }
}

/**
 * Severity Aggregate Raw Data as returned from API response
 *
 * @export
 * @interface SeverityAggregate
 * @typedef {SeverityAggregate}
 * @extends {Aggregate}
 */
export interface SeverityAggregate extends Aggregate {
  /**
   * Name/Type
   *
   * @type {'Severity'}
   */
  name: 'Severity'
  /**
   * Buckets
   *
   * @type {SeverityRawData[]}
   */
  buckets: SeverityRawData[]
}

/**
 * Trend Aggregate Raw Data as returned from API response
 *
 * @export
 * @interface TrendAggregate
 * @typedef {TrendAggregate}
 * @extends {Aggregate}
 */
export interface TrendAggregate extends Aggregate {
  /**
   * Name/Type
   *
   * @type {'TrendData'}
   */
  name: 'TrendData'
  /**
   * Buckets
   *
   * @type {TrendRawData[]}
   */
  buckets: TrendRawData[]
}

/**
 * Tactic Aggregate Raw Data as returned from API response
 *
 * @export
 * @interface TacticAggregate
 * @typedef {TacticAggregate}
 * @extends {Aggregate}
 */
export interface TacticAggregate extends Aggregate {
  /**
   * Name/Type
   *
   * @type {'Tactic'}
   */
  name: 'Tactic'
  /**
   * Buckets
   *
   * @type {TacticRawData[]}
   */
  buckets: TacticRawData[]
}

/**
 * SubTechnique Aggregate Raw Data as returned from API response
 *
 * @export
 * @interface SubTechniqueAggregate
 * @typedef {SubTechniqueAggregate}
 * @extends {Aggregate}
 */
export interface SubTechniqueAggregate extends Aggregate {
  /**
   * Name/Type
   *
   * @type {'SubTechnique'}
   */
  name: 'SubTechnique'
  /**
   * Buckets
   *
   * @type {Array<unknown>}
   */
  buckets: Array<unknown>
}

/**
 * Technique Aggregate Raw Data as returned from API response
 *
 * @export
 * @interface TechniqueAggregate
 * @typedef {TechniqueAggregate}
 * @extends {Aggregate}
 */
export interface TechniqueAggregate extends Aggregate {
  /**
   * Name/Type
   *
   * @type {'Technique'}
   */
  name: 'Technique'
  /**
   * Buckets
   *
   * @type {TechniqueRawData[]}
   */
  buckets: TechniqueRawData[]
}

/**
 * Checks if it's a Severity Aggregate, enforcing it eventually
 *
 * @export
 * @param {?Aggregate} [arg]
 * @returns {arg is SeverityAggregate}
 */
export function isSeverityAggregate(arg?: Aggregate): arg is SeverityAggregate {
  if (!arg) return false

  if ('name' in arg && 'buckets' in arg && arg.name === 'Severity') return true

  return false
}

/**
 * Checks if it's a Trend Aggregate, enforcing it eventually
 *
 * @export
 * @param {?Aggregate} [arg]
 * @returns {arg is TrendAggregate}
 */
export function isTrendAggregate(arg?: Aggregate): arg is TrendAggregate {
  if (!arg) return false

  if ('name' in arg && 'buckets' in arg && arg.name === 'TrendData') return true

  return false
}

/**
 * Checks if it's a Technique Aggregate, enforcing it eventually
 *
 * @export
 * @param {?Aggregate} [arg]
 * @returns {arg is TechniqueAggregate}
 */
export function isTechniqueAggregate(arg?: Aggregate): arg is TechniqueAggregate {
  if (!arg) return false

  if ('name' in arg && 'buckets' in arg && arg.name === 'Technique') return true

  return false
}

/**
 * Checks if it's a Tactic Aggregate, enforcing it eventually
 *
 * @export
 * @param {?Aggregate} [arg]
 * @returns {arg is TacticAggregate}
 */
export function isTacticAggregate(arg?: Aggregate): arg is TacticAggregate {
  if (!arg) return false

  if ('name' in arg && 'buckets' in arg && arg.name === 'Tactic') return true

  return false
}

/**
 * Tactic definition refined structure
 *
 * @export
 * @interface TacticDefinition
 * @typedef {TacticDefinition}
 */
export interface TacticDefinition {
  /**
   * Tactic's Id
   *
   * @type {string}
   */
  id: string
  /**
   * Tactic's name
   *
   * @type {string}
   */
  name: string
  /**
   * Tactic's description
   *
   * @type {string}
   */
  description: string
  /**
   * Tactic's description modified timestamp
   *
   * @type {string}
   */
  modified: string
  /**
   * Techniques
   *
   * @type {string[]}
   */
  techniques: string[]
}

/**
 * Technique definition refined structure
 *
 * @export
 * @interface TechniqueDefinition
 * @typedef {TechniqueDefinition}
 */
export interface TechniqueDefinition {
  /**
   * Technique's Id
   *
   * @type {string}
   */
  id: string
  /**
   * Technique's name
   *
   * @type {string}
   */
  name: string
  /**
   * Technique's description
   *
   * @type {string}
   */
  description: string
  /**
   * Technique's creation timestamp
   *
   * @type {string}
   */
  created: string
  /**
   * Technique's modification timestamp
   *
   * @type {string}
   */
  modified: string
  /**
   * Subtechniques
   *
   * @type {string[]}
   */
  subtechniques: string[]
}

/**
 * Matrix Map Raw response (from API)
 *
 * @export
 * @interface MatrixMapResponse
 * @typedef {MatrixMapResponse}
 */
export interface MatrixMapResponse {
  /**
   * Version Number (default: 14)
   *
   * @type {string}
   */
  version: string
  /**
   * Tactics definitions
   *
   * @type {Record<string, TacticDefinition>}
   */
  tactics: Record<string, TacticDefinition>
  /**
   * Techniques definitions
   *
   * @type {Record<string, TechniqueDefinition>}
   */
  techniques: Record<string, TechniqueDefinition>
}

/**
 * Jira Integration Account structure
 *
 * @export
 * @interface JiraIntegrationAccount
 * @typedef {JiraIntegrationAccount}
 */
export interface JiraIntegrationAccount {
  /**
   * Name
   *
   * @type {string}
   */
  name: string
  /**
   * Id
   *
   * @type {string}
   */
  id: string
}

/**
 * Jira Integration Project structure
 *
 * @export
 * @interface JiraProjectItem
 * @typedef {JiraProjectItem}
 */
export interface JiraProjectItem {
  /**
   * Name
   *
   * @type {string}
   */
  name: string
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * href (to instance's page)
   *
   * @type {string}
   */
  href: string
  /**
   * private or not
   *
   * @type {boolean}
   */
  isPrivate: boolean
}

/**
 * Jira Integration Priority structure
 *
 * @export
 * @interface JiraPriorityItem
 * @typedef {JiraPriorityItem}
 */
export interface JiraPriorityItem {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Name
   *
   * @type {string}
   */
  name: string
  /**
   * href (to instance's page)
   *
   * @type {string}
   */
  href: string
  /**
   * Description
   *
   * @type {string}
   */
  description: string
}

/**
 * Jira Integration Issue Type structure
 *
 * @export
 * @interface JiraIssueTypeItem
 * @typedef {JiraIssueTypeItem}
 */
export interface JiraIssueTypeItem {
  /**
   * Id
   *
   * @type {string}
   */
  id: string
  /**
   * Name
   *
   * @type {string}
   */
  name: string
  /**
   * href (to instance's page)
   *
   * @type {string}
   */
  href: string
  /**
   * Description
   *
   * @type {string}
   */
  description: string
}

/**
 * Jira Integration Project Data structure
 *
 * @export
 * @interface JiraProjectData
 * @typedef {JiraProjectData}
 */
export interface JiraProjectData {
  /**
   * Project Definition
   *
   * @type {JiraProjectItem}
   */
  project: JiraProjectItem
  /**
   * Account Definition
   *
   * @type {JiraIntegrationAccount}
   */
  account: JiraIntegrationAccount
  /**
   * Priorities Definitions
   *
   * @type {JiraPriorityItem[]}
   */
  priorities: JiraPriorityItem[]
  /**
   * Labels Definitions
   *
   * @type {string[]}
   */
  labels: string[]
  /**
   * Issue Types Definitions
   *
   * @type {JiraIssueTypeItem[]}
   */
  issueTypes: JiraIssueTypeItem[]
}

/**
 * Notify Config Structure
 *
 * @export
 * @interface NotifyConfig
 * @typedef {NotifyConfig}
 * @extends {Record<string, unknown>}
 */
export interface NotifyConfig extends Record<string, unknown> {
  /**
   * Account Id
   *
   * @type {string}
   */
  account: string
  /**
   * Account Id
   *
   * @type {string}
   */
  priority: string
  /**
   * Labels
   *
   * @type {string[]}
   */
  labels: string[]
  /**
   * Issue Type Id
   *
   * @type {string}
   */
  issueType: string
  /**
   * Summary string (with variables)
   *
   * @type {string}
   */
  summary: string
  /**
   * Description string (with variables)
   *
   * @type {string}
   */
  description: string
  /**
   * Project Id
   *
   * @type {string}
   */
  project: string
}

/**
 * Mitre Matrix content type
 *
 * @export
 * @typedef {ContentType}
 */
export type ContentType = 'enterprise' | 'mobile' | 'detection_enterprise' | 'detection_mobile'
/**
 * Mitre Matrix content options
 *
 * @export
 * @typedef {ContentOptions}
 */
export type ContentOptions = Record<ContentType, string>
