import { Severity, type DetectionIconColor, type DetectionIconColorClass } from './types'

/**
 * Defined severity colors
 *
 * @typedef {ColorToClassesMatch}
 */
type ColorToClassesMatch = { [key in Severity | 'default']: DetectionIconColorClass }

/**
 * Will return the css class matching the passed severity
 *
 * @export
 * @param {DetectionIconColor} color
 * @returns {DetectionIconColorClass}
 */
export default function getIconColorClass(color: DetectionIconColor): DetectionIconColorClass {
  const classes: ColorToClassesMatch = {
    ['default']: 'text-titles-and-attributes',
    [Severity.CRITICAL]: 'text-critical',
    [Severity.HIGH]: 'text-high',
    [Severity.MEDIUM]: 'text-medium',
    [Severity.LOW]: 'text-low',
    [Severity.INFORMATIONAL]: 'text-informational',
    [Severity.UNKNOWN]: 'text-disabled'
  }
  return classes[color]
}
