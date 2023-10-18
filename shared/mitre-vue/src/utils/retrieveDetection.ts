import type { ApiResponsePayload } from '@crowdstrike/foundry-js'
import type { DetectionItem } from './types'
import type FalconApi from '@crowdstrike/foundry-js'

/**
 * Retrieve the detection detail from the API backed with the passed detection Id
 *
 * @export
 * @async
 * @template T
 * @param {FalconApi} falconApi
 * @param {string} detectionId
 * @returns {Promise<T | undefined>}
 */
export default async function retrieveDetection<T extends DetectionItem>(
  falconApi: FalconApi,
  detectionId: string
): Promise<T | undefined> {
  if (!detectionId) {
    return undefined
  }

  const data = (await falconApi.api.alerts.postEntitiesAlertsV1({
    ids: [detectionId]
  })) as ApiResponsePayload<T>

  return data?.resources?.[0]
}
