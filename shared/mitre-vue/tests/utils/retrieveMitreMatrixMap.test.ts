import FalconApi from '@crowdstrike/foundry-js'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import retrieveMitreMatrixMap from '../../src/utils/retrieveMitreMatrixMap'
import mitreMatrixDefinition from '../../src/data-sample/mitre-matrix-definition-v11.json'

describe('Unit test - retrieveMitreMatrixMap', () => {
    const falconApi = new FalconApi()
    falconApi.isConnected = true

    const getIntelMitreEntitiesMatrixV1Spy = vi.spyOn(falconApi.api.mitre, 'getIntelMitreEntitiesMatrixV1')

    beforeEach(() => {
        getIntelMitreEntitiesMatrixV1Spy.mockClear()
    })

    it('Should retrieve default values successfully', async () => {
        const resources = [ 'test1', 'test2']
        getIntelMitreEntitiesMatrixV1Spy.mockImplementationOnce((_urlParams) => {
            return new Promise((resolve) => {
                resolve({
                    resources
                })
                
            })
        })

        const matrixMap = await retrieveMitreMatrixMap(falconApi, '1.0');
        expect(getIntelMitreEntitiesMatrixV1Spy).toHaveBeenCalledWith({ version: '1.0'})
        expect(matrixMap).toBe(resources[0])
    })

    it('Should call api with no version specified and retrieve mocked mitreMatrixDefinition', async () => {
        getIntelMitreEntitiesMatrixV1Spy.mockImplementationOnce((_urlParams) => {
            return new Promise((resolve) => {
                resolve({})
            })
        })

        const matrixMap = await retrieveMitreMatrixMap(falconApi);
        expect(getIntelMitreEntitiesMatrixV1Spy).toHaveBeenCalledWith(undefined)
        expect(matrixMap).toBe(mitreMatrixDefinition)
    })

    it('Should catch error and return mocked mitreMatrixDefinition', async () => {
        getIntelMitreEntitiesMatrixV1Spy.mockImplementationOnce((_urlParams) => {
            return new Promise(() => {
                throw Error('test')
            })
        })

        const matrixMap = await retrieveMitreMatrixMap(falconApi, '1.0');
        expect(getIntelMitreEntitiesMatrixV1Spy).toHaveBeenCalledWith({ version: '1.0'})
        expect(matrixMap).toBe(mitreMatrixDefinition)
    })
})