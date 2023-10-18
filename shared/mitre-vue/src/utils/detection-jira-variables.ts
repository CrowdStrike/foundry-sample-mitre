import type { DetectionItem } from './types'
import type FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '../plugins/i18n'
import get from 'lodash.get'

/**
 * Mapping object, with transformation functions, between visible variable names and Detection's related values
 *
 * @type {{ readonly AgentId: "agent_id"; readonly AgentVersion: "device.agent_version"; readonly AllegedFiletype: "alleged_filetype"; readonly ClientID: "cid"; readonly CmdLine: "cmdline"; ... 29 more ...; readonly UserName: "user_name"; }}
 */
export const JiraVariablesMapping = {
  AgentId: 'agent_id',
  AgentVersion: 'device.agent_version',
  AllegedFiletype: 'alleged_filetype',
  ClientID: 'cid',
  CmdLine: 'cmdline',
  CreatedTimestamp: 'created_timestamp:datetime',
  DetectionId: 'id',
  DeviceID: 'device.device_id',
  ExternalIP: 'device.external_ip',
  FalconHostLink: 'falcon_host_link',
  FileName: 'filename',
  FilePath: 'filepath',
  Hostname: 'device.hostname',
  Name: 'name',
  Objective: 'objective',
  PatternDisposition: 'pattern_disposition_description',
  PatternDispositionID: 'pattern_disposition',
  Platform: 'platform',
  ProcessEndTime: 'process_end_time:datetime',
  ProcessID: 'process_id',
  ProcessStartTime: 'process_start_time:datetime',
  Product: 'product',
  Scenario: 'scenario',
  Severity: 'severity:toSeverityValue',
  Status: 'status',
  Tactic: 'tactic',
  TacticID: 'tactic_id',
  Tags: 'tags:join',
  Technique: 'technique',
  TechniqueID: 'technique_id',
  TimeStamp: 'timestamp:datetime',
  Type: 'type',
  UpdatedTimestamp: 'updated_timestamp:datetime',
  UserID: 'user_id',
  UserName: 'user_name'
} as const

/**
 * This function will retrieve, and eventually transform/format, the required variable from the passed Detection object
 *
 * @param {FalconApi} falconApi
 * @param {I18NComposer} i18n
 * @param {string} variable
 * @param {?DetectionItem} [detection]
 * @param {string} [defaultValue='---']
 * @param {('preview' | 'ticket')} [purpose='preview']
 * @returns {string}
 */
export const mapVariableToDetection = (
  falconApi: FalconApi,
  i18n: I18NComposer,
  variable: string,
  detection?: DetectionItem,
  defaultValue = '---',
  purpose: 'preview' | 'ticket' = 'preview'
): string => {
  const varPath = (JiraVariablesMapping as Record<string, string>)[variable] ?? ''
  let varValue: unknown = ''
  if (varPath) {
    const [varName, transformFunction] = varPath.split(':')
    try {
      varValue = get(detection || {}, varName) as unknown

      if (transformFunction) {
        switch (transformFunction) {
          case 'join': {
            if (varValue) {
              varValue = [...(varValue as string[])].join(', ')
            }

            break
          }

          case 'toSeverityValue': {
            if (varValue) {
              const numericValue = Number(varValue)

              if (isNaN(numericValue)) {
                varValue = 'Unknown'
              } else if (numericValue <= 20) {
                varValue = 'Informational'
              } else if (numericValue <= 40) {
                varValue = 'Low'
              } else if (numericValue <= 60) {
                varValue = 'Medium'
              } else if (numericValue <= 80) {
                varValue = 'High'
              } else if (numericValue <= 101) {
                varValue = 'Critical'
              } else {
                varValue = 'Unknown'
              }
            }

            break
          }

          case 'datetime':
            if (varValue) {
              const numericValue = Number(varValue)
              const valDate = new Date(
                isNaN(numericValue) ? String(varValue) : Number(varValue) * 1000
              )
              if (purpose === 'preview') {
                varValue = i18n.d(valDate, 'fullDateTime', falconApi.data?.locale as string)
              } else {
                varValue = valDate.toISOString()
              }
            }

            break

          default:
            break
        }
      }
    } catch (error) {
      console.error(error)
      console.log(varName, varValue)
    }
  }

  return String(varValue) || defaultValue
}

/**
 * It will replace all the specified variables in the passed string with the relative value,
 * if it exists in the passed Detection object
 *
 * @param {FalconApi} falconApi
 * @param {I18NComposer} i18n
 * @param {string} message
 * @param {?DetectionItem} [detection]
 * @returns {string}
 */
export const replaceVariables = (
  falconApi: FalconApi,
  i18n: I18NComposer,
  message: string,
  detection?: DetectionItem
): string => {
  if (detection) {
    Object.keys(JiraVariablesMapping).forEach((key) => {
      const formattedKey = ['${', key, '}'].join('')

      const varValue = mapVariableToDetection(falconApi, i18n, key, detection)
      //@ts-ignore: the app will be compiled with modern browsers in mind. Replace all exists in our target browser list
      message = message.replaceAll(formattedKey, varValue)
    })
  }

  return message
}
