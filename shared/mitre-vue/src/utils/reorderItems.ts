import { SeverityPrecedence, type Technique, type Tactic } from './types'

/**
 * The default tactic order for the chart
 *
 * @type {{}}
 */
export const defaultTacticOrder = [
  'Reconnaissance',
  'Resource Development',
  'Initial Access',
  'Execution',
  'Persistence',
  'Privilege Escalation',
  'Defense Evasion',
  'Credential Access',
  'Discovery',
  'Lateral Movement',
  'Collection',
  'Command and Control',
  'Exfiltration',
  'Impact',
  'Malware',
  'Exploit',
  'Post-Exploit',
  'Machine Learning',
  'Custom Intelligence',
  'Falcon Overwatch',
  'Falcon Intel',
  'AI Powered IOA',
  'Insecure Security Posture'
]

/**
 * Function used to sort by severity and detection number
 *
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {number}
 */
function sortBySeverityAndDetections<T extends Technique>(a: T, b: T): number {
  if (!a || !b) {
    return 0
  }

  const aSeverity = SeverityPrecedence[a.severity] ?? 0
  const bSeverity = SeverityPrecedence[b.severity] ?? 0

  return aSeverity - bSeverity || a.detections_number - b.detections_number || 0
}

/**
 * The function used to sort by Tactic using the tacticsOrder
 *
 * @template T
 * @param {string[]} tacticsOrder
 * @returns {(a: T, b: T) => number}
 */
function sortByTacticGen<T extends Tactic>(tacticsOrder: string[]): (a: T, b: T) => number {
  const sortByTactic = (a: T, b: T): number => {
    if (!a || !b) {
      return 0
    }

    const aPrecedence =
      tacticsOrder.findIndex((item) => a.label === item) ?? Number.MAX_SAFE_INTEGER
    const bPrecedence =
      tacticsOrder.findIndex((item) => b.label === item) ?? Number.MAX_SAFE_INTEGER

    return aPrecedence - bPrecedence || 0
  }

  return sortByTactic
}

/**
 * Reorders the passed items following some internal rules to have consistent ordering over time
 *
 * @export
 * @async
 * @param {Tactic[]} tactics
 * @param {boolean} showSubTechniques
 * @returns {Tactic[]}
 */
export default function reorderItems(
  tactics: Tactic[],
  showSubTechniques: boolean
): Tactic[] {
  if (showSubTechniques) {
    return tactics
      .map((tactic) => {
        return {
          ...tactic,
          techniques: [...tactic.techniques
            .map((technique) => {
              return {
                ...technique,
                sub_techniques: technique.sub_techniques?.length ? [...technique.sub_techniques]?.sort(sortBySeverityAndDetections) : undefined
              }
            })]
            .sort(sortBySeverityAndDetections)
        }
      })
      .sort(sortByTacticGen(defaultTacticOrder))
  } else {
    return tactics
      .map((tactic) => {
        return {
          ...tactic,
          techniques: [...tactic.techniques].sort(sortBySeverityAndDetections)
        }
      })
      .sort(sortByTacticGen(defaultTacticOrder))
  }
}
