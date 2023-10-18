import type { ApiResponsePayload } from '@crowdstrike/foundry-js'
import type FalconApi from '@crowdstrike/foundry-js'
import type { MatrixMapResponse } from './types'
import { mitreMatrixDefinition } from '../data-sample'

/**
 * Type of MITRE mapping
 *
 * @export
 * @typedef {MitreType}
 */
export type MitreType = 'default' | 'enterprise' | 'mobile'

/**
 * Retrieves the MITRE tactic/techniques mapping and details from the API backed.
 * It uses a cached/saved json file as fallback
 *
 * @export
 * @async
 * @param {FalconApi} falconApi
 * @param {?string} [version]
 * @returns {Promise<MatrixMapResponse>}
 */
export default async function retrieveMitreMatrixMap(
  falconApi: FalconApi,
  version?: string
): Promise<MatrixMapResponse> {
  try {
    const response = (await falconApi.api.mitre.getIntelMitreEntitiesMatrixV1(
      version
        ? {
            version
          }
        : undefined
    )) as Promise<ApiResponsePayload<MatrixMapResponse>>

    const defaultVal = (await response)?.resources?.[0]

    return (defaultVal ?? mitreMatrixDefinition) as MatrixMapResponse
  } catch (error) {
    // using the static data as a fallback as it's not going to change so often
    return mitreMatrixDefinition as unknown as MatrixMapResponse
  }
}
