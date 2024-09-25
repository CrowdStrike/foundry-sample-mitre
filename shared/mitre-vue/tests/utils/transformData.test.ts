import { describe, expect, it } from 'vitest'
import transformData, { calculateTrend } from '../../src/utils/transformData'
import tacticAggregates from '../../src/data-sample/tactic-aggregates.json'
import mitreMatrixDefinition from '../../src/data-sample/mitre-matrix-definition-v11.json'
import { MatrixMapResponse, TacticAggregate, TrendAggregate } from '../../src/utils/types'
import { ApiResponsePayload } from '@crowdstrike/foundry-js'


describe('Unit test - transformData.ts', () => {
    // Please note that changing tactic-aggregates.json or mitre-matrix-definition-v11 might break the tests

    it('Should have as many Tactics as the tactic bucket from aggregates', () => {
        const result = transformData(
            new Date(),
            new Date(),
            tacticAggregates as ApiResponsePayload<TacticAggregate>,
            mitreMatrixDefinition as unknown as MatrixMapResponse,
            false,
            false
        )

        expect(tacticAggregates.resources[0].buckets.length).toBe(result.length)
        expect(true).toBeTruthy()
    })

    it('Should have all Techniques, listed under the correct Tactic', () => {
        const result = transformData(
            new Date(),
            new Date(),
            tacticAggregates as ApiResponsePayload<TacticAggregate>,
            mitreMatrixDefinition as unknown as MatrixMapResponse,
            false,
            false
        )

        result.map((tactic) => {
            const listOfTechniques = tactic.techniques.map(t => t.technique_id);

            const tacticAggregate = tacticAggregates.resources[0].buckets.find(a => a.label === tactic.id)
            tacticAggregate?.sub_aggregates.filter(a => a.name === 'Technique')?.[0].buckets.map(techniqueAggregate => {
                expect(listOfTechniques.includes(techniqueAggregate.label)).toBeTruthy()
            })
        })
    })

    it('Should list "severity" numbers in all tactics and techniques', () => {
        const result = transformData(
            new Date(),
            new Date(),
            tacticAggregates as ApiResponsePayload<TacticAggregate>,
            mitreMatrixDefinition as unknown as MatrixMapResponse,
            false,
            false
        )

        tacticAggregates.resources[0].buckets.map(tactic => {
            const resultTactic = result.find(t => t.id === tactic.label)
            if(resultTactic){
                const resultSeverityValues = Object.values(resultTactic?.severity_details as unknown as Record<string, number>)
                tactic.sub_aggregates.find(t => t.name === 'Severity')?.buckets.map(severity => {
                    expect(resultSeverityValues.includes(severity.count)).toBeTruthy()
                })
            }
            tactic.sub_aggregates.find(t => t.name === 'Technique')?.buckets.map(technique => {
                const resultTechnique = resultTactic?.techniques.find(t => t.technique_id === technique.label)
                if(resultTechnique){
                    const resulTechniquetSeverityValues = Object.values(resultTechnique?.severity_details as unknown as Record<string, number>)
                    technique.sub_aggregates.find(t => t.name === 'Severity')?.buckets.map(severity => {
                        expect(resulTechniquetSeverityValues.includes(severity.count)).toBeTruthy()
                    })
                }
            })
        })
    })

    it('Should list "trend" data in all tactics and techniques', () => {
        const today = new Date();
        const yesterday = new Date()
        yesterday.setDate(today.getDate() - 1 );

        const result = transformData(
            yesterday,
            today,
            tacticAggregates as ApiResponsePayload<TacticAggregate>,
            mitreMatrixDefinition as unknown as MatrixMapResponse,
            true,
            false
        )

        tacticAggregates.resources[0].buckets.map(tactic => {
            const resultTactic = result.find(t => t.id === tactic.label)
            if(resultTactic){
                const resultTacticTrend = resultTactic?.trend
                const trendData = tactic.sub_aggregates.find(t => t.name === 'TrendData')
                const trend = calculateTrend(trendData as TrendAggregate, yesterday, today)
                expect(resultTacticTrend).toBe(trend)

                tactic.sub_aggregates.find(t => t.name === 'Technique')?.buckets.map(technique => {
                    const resultTechniqueTrend = resultTactic?.techniques.find(t => t.technique_id === technique.label)?.trend
                    if(resultTechniqueTrend){
                        const techniqueTrendData = technique.sub_aggregates.find(t => t.name === 'TrendData')
                        const techniqueTrend = calculateTrend(techniqueTrendData as TrendAggregate, yesterday, today)
                        expect(resultTechniqueTrend).toBe(techniqueTrend)
                    }
                })
            }
        })

    })

    it('Should calculate trend a 100% increase', () => {
        const exampleTrendData = {
            "name": "TrendData",
            "buckets": [
              {
                "label": 1693526400000,
                "key_as_string": "2023-09-01T00:00:00.000Z",
                "count": 87778
              }
            ]
          }
        const to = new Date()
        const from = new Date();
        from.setDate(to.getDate() - 91)
        const calculatedTrend = calculateTrend(exampleTrendData as TrendAggregate, from, to)
        expect(calculatedTrend).toBe(-1)
    })

    it('Should calculate trend a 100% decrease', () => {
        const exampleTrendData = {
            "name": "TrendData",
            "buckets": [
              {
                "label": 1693526400000,
                "key_as_string": "2023-09-01T00:00:00.000Z",
                "count": 87778
              }
            ]
          }
        const to = new Date()
        const from = new Date();
        from.setDate(to.getDate() - 31)
        const calculatedTrend = calculateTrend(exampleTrendData as TrendAggregate, from, to)
        expect(calculatedTrend).toBe(-1)
    })

    it('Should calculate trend as a percentual increase', () => {
        const exampleTrendData = {
            "name": "TrendData",
            "buckets": [
              {
                "label": 1693526400000,
                "key_as_string": "2023-09-01T00:00:00.000Z",
                "count": 87778
              },
              {
                "label": 1696118400000,
                "key_as_string": "2023-10-01T00:00:00.000Z",
                "count": 11324
              }
            ]
          }

        const calculatedTrend = calculateTrend(exampleTrendData as TrendAggregate, new Date(), new Date())
        expect(calculatedTrend > 0).toBeTruthy()
    })

    it('Should calculate trend as a percentual decrease', () => {
        const exampleTrendData = {
            "name": "TrendData",
            "buckets": [
              {
                "label": 1693526400000,
                "key_as_string": "2023-09-01T00:00:00.000Z",
                "count": 11324
              },
              {
                "label": 1696118400000,
                "key_as_string": "2023-10-01T00:00:00.000Z",
                "count": 87778
              }
            ]
          }

        const calculatedTrend = calculateTrend(exampleTrendData as TrendAggregate, new Date(), new Date())

        expect(calculatedTrend < 0).toBeTruthy()
    })

    it('Should ensure that Sub Techniques are transformed, with severity details and trend', () => {
        const from = new Date()
        const to = new Date()
        const result = transformData(
            from,
            to,
            tacticAggregates as ApiResponsePayload<TacticAggregate>,
            mitreMatrixDefinition as unknown as MatrixMapResponse,
            true,
            true
        )

        tacticAggregates.resources[0].buckets.map(tactic => {
            const resultTactic = result.find(t => t.id === tactic.label)
            if(!resultTactic){
                return
            }
            tactic.sub_aggregates.find(t => t.name === 'Technique')?.buckets.map(technique => {
                const isSubetechnique = technique.label.split('.').length === 2;
                if(isSubetechnique){
                    let foundSubTechnique
                    resultTactic?.techniques.filter(t => (t.tactic_id === tactic.label && t?.sub_techniques?.length)).find( t => {
                        foundSubTechnique = t.sub_techniques?.find(st => technique.label === st.technique_id)
                    })

                    expect(foundSubTechnique?.is_subtechnique).toBeTruthy()


                    const severityDetails = Object.values(foundSubTechnique?.severity_details)

                    technique?.sub_aggregates?.find(t => t.name === 'Severity')?.buckets.map((severity) =>{
                        expect(severityDetails.includes(severity.count)).toBeTruthy()
                    })
                    const trendAggregate: TrendAggregate = technique?.sub_aggregates?.find(t => t.name === 'TrendData')
                    const calculatedTrend = calculateTrend(trendAggregate, from, to)
                    expect(foundSubTechnique.trend).toBe(calculatedTrend)
                }
            })
        })
    })
})
