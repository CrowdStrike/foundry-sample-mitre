import { describe, expect, it } from 'vitest'
import reorderItems from '../../src/utils/reorderItems'
import transformedTactics from '../../src/data-sample/transformed-tactic-array.json'
import { Tactic } from '../../src/utils/types'

describe('Unit test - reorderItems.ts', () => {
    // Please note that changing transformed-tactic-array.json might break the tests

    it('Should reorder Tactics and Techniques, without reordering sub-techniques', () => {
        const result = reorderItems(transformedTactics as unknown as Tactic[], false)

        expect(transformedTactics.map(t => t.label)).not.toStrictEqual(result.map(t=>t.label));

        transformedTactics.map(tactic => {
            const resultTactic = result.find((resultTactic) => resultTactic.label === tactic.label)

            if(tactic.techniques.length > 1 && tactic.techniques.length > 1){
                expect(tactic.techniques.map(t => t.label)).not.toStrictEqual(resultTactic?.techniques.map(t => t.label))
            }

            tactic.techniques.map((technique) => {
                if(!technique.sub_techniques?.length) {
                    return
                }

                const resultTechnique = resultTactic?.techniques?.find(resultTechnique => resultTechnique.label === technique.label);

                if(!resultTechnique?.sub_techniques){
                    return
                }

                expect(technique.sub_techniques.map(t => t.id)).toStrictEqual(resultTechnique.sub_techniques.map(t=>t.id))
            })
        })
    })
    it('Should reorder sub techniques too', () => {
        const result = reorderItems(transformedTactics as unknown as Tactic[], true)
        transformedTactics.map(tactic => {
            
            tactic.techniques.map((technique) => {
                if(!technique.sub_techniques?.length) {
                    return
                }

                const resultTechnique = result.find((resultTactic) => resultTactic.label === tactic.label)?.techniques?.find(resultTechnique => resultTechnique.label === technique.label);

                if(!resultTechnique?.sub_techniques){
                    return
                }

                if(resultTechnique.sub_techniques.length > 1 && technique.sub_techniques?.length > 1){
                    expect(technique.sub_techniques.map(t => t.id)).not.toStrictEqual(resultTechnique.sub_techniques.map(t=>t.id))
                }
            })
        })
    })
})