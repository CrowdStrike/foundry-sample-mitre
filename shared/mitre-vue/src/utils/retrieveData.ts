import type FalconApi from '@crowdstrike/foundry-js'
import type { ApiResponsePayload } from '@crowdstrike/foundry-js'
import { type MatrixMapResponse, type TacticAggregate, type TimeRangeValue } from './types'

type IntervalRange = 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type AggregationType = 'range' | 'terms' | 'date_histogram'

interface AggregateDefinition {
  field: string
  name?: string
  filter?: string
  type?: 'range' | 'terms' | 'date_histogram'
  ranges?: Array<{
    from: number
    to: number
    name: string
  }>
  min_doc_count?: number
  sub_aggregates?: AggregateDefinition[]
  interval?: IntervalRange
}

export const severityAggregation = {
  field: 'severity',
  type: 'range' as AggregationType,
  name: 'Severity',
  ranges: [
    {
      from: 80,
      to: 101,
      name: 'Critical'
    },
    {
      from: 60,
      to: 80,
      name: 'High'
    },
    {
      from: 40,
      to: 60,
      name: 'Medium'
    },
    {
      from: 20,
      to: 40,
      name: 'Low'
    },
    {
      from: 0,
      to: 20,
      name: 'Informational'
    }
  ],
}

export const getIds = (map: Record<string, unknown>, filterCS: boolean): string => {
  return Object.keys(map)
    .filter((id) => (filterCS ? !id.toUpperCase().startsWith('CS') : true))
    .map((id) => `'${id}'`)
    .join(',')
}

export function getFilter(from: TimeRangeValue, matrixMapInfos: MatrixMapResponse, filterCS: boolean) {
  const tacticIds = getIds(matrixMapInfos.tactics, filterCS)
  const techniqueIds = getIds(matrixMapInfos.techniques, filterCS)

  return `(created_timestamp:>='now-${from}'+created_timestamp:<'now')+product:['epp']+tactic_id:[${tacticIds}]+technique_id:[${techniqueIds}]`
}

export function getRequest(
  from: TimeRangeValue,
  showTrends: boolean,
  matrixMapInfos: MatrixMapResponse,
  filterCS: boolean
): AggregateDefinition[] {

  let trendAggregation: AggregateDefinition | null = null;

  if (showTrends) {
    let range: IntervalRange = 'hour'

    if (from === '30d') {
      range = 'month'
    } else if (from === '7d') {
      range = 'week'
    } else if (from === '1d') {
      range = 'day'
    } else {
      range = 'hour'
    }

    trendAggregation = {
      field: 'created_timestamp',
      type: 'date_histogram' as AggregationType,
      interval: range,
      name: 'TrendData'
    }
  }

  const subAggregates: AggregateDefinition[] = trendAggregation === null
    ? [{...severityAggregation}]
    : [ {
          ...severityAggregation
        },
        {
          ...trendAggregation
        }
      ]

  const request: AggregateDefinition[] = [
    {
      field: 'tactic_id',
      name: 'Tactic',
      filter: getFilter(from, matrixMapInfos, filterCS),
      sub_aggregates: [
        {
          name: 'Technique',
          type: 'terms',
          field: 'technique_id',
          sub_aggregates: subAggregates
        },
        ...subAggregates
      ],
      type: 'terms'
    }
  ]

  return request
}

export default async function retrieveData<T extends TacticAggregate>(
  falconApi: FalconApi,
  from: TimeRangeValue,
  showTrends: boolean,
  matrixMapInfos: MatrixMapResponse,
  filterCS: boolean
): Promise<ApiResponsePayload<T> | undefined> {
  const requestData = getRequest(from, showTrends, matrixMapInfos, filterCS)

  return falconApi.api.alerts.postAggregatesAlertsV1(requestData) as Promise<ApiResponsePayload<T>>
}
