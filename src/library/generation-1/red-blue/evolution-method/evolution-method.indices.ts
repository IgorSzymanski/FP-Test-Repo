import { ID } from '~/value-objects/id'
import { ValuesOf } from '~library/helpers'

export const EvolutionMethodIds = [ID('level'), ID('item'), ID('trade')]

export type EvolutionMethodId = ValuesOf<typeof EvolutionMethodIds>
