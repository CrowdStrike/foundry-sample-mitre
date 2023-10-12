import FalconApi from '@crowdstrike/foundry-js'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import retrieveDetection from '../../src/utils/retrieveDetection'

describe('Unit test - retrieveDetection', () => {
    const falconApi = new FalconApi()
    falconApi.isConnected = true

    const postEntitiesAlertsV1Spy = vi.spyOn(falconApi.api.alerts, 'postEntitiesAlertsV1')

    beforeEach(() => {
        postEntitiesAlertsV1Spy.mockClear()
    })

    it('Should retrieve default values successfully', async () => {
        const resources = [ 'test1', 'test2']
        const detectionId = 'detectionId'
        postEntitiesAlertsV1Spy.mockImplementationOnce((_postBody) => {
            return new Promise((resolve) => {
                resolve({
                    resources
                })
                
            })
        })

        const matrixMap = await retrieveDetection(falconApi, detectionId);
        expect(postEntitiesAlertsV1Spy).toHaveBeenCalledWith({ ids: [detectionId]})
        expect(matrixMap).toBe(resources[0])
    })

    // This case is not tested as typescript won't allow to call retrieveDetection with an 'falsy' detectionId
    // it('Should return undefined if no detectionId is provided')
})