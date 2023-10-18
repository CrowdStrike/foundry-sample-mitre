import FalconApi from '@crowdstrike/foundry-js'
import { describe, expect, it, vi } from 'vitest'
import retrieveData, { getIds, getFilter, getRequest, severityAggregation } from '../../src/utils/retrieveData'
import { MatrixMapResponse, TimeRangeValue } from '../../src/utils/types';

describe('Unit test - retrieveData.ts', () => {
    const idsList = {
        id: 1, id2: 2, id3: 3,
        cs: 1, CS2: 2, cS3: 3, Cs4: 4
    }

    const matrixMapInfos = {
        tactics: {
            id: 1, csid: 1
        },
        techniques: {
            cstid: 1, tid: 1
        }
    } as unknown as MatrixMapResponse

    it('Should retrieve correct ids without filtering', () => {
        const ids = getIds(idsList, false)
        
        expect(ids).toBe("'id','id2','id3','cs','CS2','cS3','Cs4'")
    })

    it('Should retrieve correct Ids filtering out CS ones', () => {
        const ids = getIds(idsList, true)
        
        expect(ids).toBe("'id','id2','id3'")
    })

    it('Should retrieve the correct filter string', () => {


        const filter = getFilter('1h', matrixMapInfos, true)

        expect(filter).toContain("created_timestamp:>='now-1h'")
        expect(filter).toContain("+created_timestamp:<'now'")
        expect(filter).toContain("+product:['epp']")
        expect(filter).toContain("+tactic_id:['id']")
        expect(filter).toContain("+technique_id:['tid']")
    })

    it('Should build and get the correct request object with trends and filterCS', () => {
        const request = getRequest('1h', true, matrixMapInfos, false)
        expect(request?.[0]).toContain({field: 'tactic_id'})
        expect(request?.[0].filter).toContain("+tactic_id:['id','csid']")
        expect(request?.[0].filter).toContain("+technique_id:['cstid','tid']")
        expect(request[0]?.sub_aggregates?.[1]).toContain(severityAggregation)
        expect(request[0]?.sub_aggregates?.[2]).toContain({name: 'TrendData', interval: 'hour'})
        expect(request[0]?.sub_aggregates?.[0]?.sub_aggregates?.[0]).toContain(severityAggregation)
        expect(request[0]?.sub_aggregates?.[0]?.sub_aggregates?.[1]).toContain({name: 'TrendData', interval: 'hour'})
    })

    it('Should build and get the correct request object without trends and CS ids filtered out', () => {

        const request = getRequest('1h', false, matrixMapInfos, true)
        expect(request?.[0]).toContain({field: 'tactic_id'})
        expect(request?.[0].filter).toContain("+tactic_id:['id']")
        expect(request?.[0].filter).toContain("+technique_id:['tid']")
        expect(request[0].sub_aggregates?.[1]).toContain(severityAggregation)
        expect(request[0].sub_aggregates?.[2]).undefined
        expect(request[0].sub_aggregates?.[0]?.sub_aggregates?.[0]).toContain(severityAggregation)
        expect(request[0].sub_aggregates?.[0]?.sub_aggregates?.[1]).undefined
    })

    it('Should build and get the correct request object with all time ranges', () => {
        const timeRanges: Record<TimeRangeValue, string> = {"30d": 'month', "7d": "week", "1d": "day", '1h': 'hour'}

        Object.keys(timeRanges).map((timeRange) => {
            const request = getRequest(timeRange as TimeRangeValue, true, matrixMapInfos, true)
            expect(request?.[0]?.sub_aggregates?.[2]).toContain({interval: timeRanges[timeRange]})
        })
        const request = getRequest('test' as unknown as TimeRangeValue, true, matrixMapInfos, true)
        expect(request?.[0]?.sub_aggregates?.[2]).toContain({interval: 'hour'})
    })

    it('Should call postAggregatesAlertsV1 api', () => {
        const falconApi = new FalconApi()
        falconApi.isConnected = true

        const spy = vi.spyOn(falconApi.api.alerts, 'postAggregatesAlertsV1')

        spy.mockImplementation((_postBody) => {
            return new Promise(() => {})
        })

        retrieveData(falconApi, '1h', true, matrixMapInfos, false)
        expect(spy).toBeCalled()
    })
});
