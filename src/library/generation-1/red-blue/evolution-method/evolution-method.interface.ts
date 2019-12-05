import { EvolutionMethodId } from './evolution-method.indices'
import { INamedResource } from '~/library/interfaces/named-resource.interface'

export type IEvolutionMethod<I extends EvolutionMethodId = EvolutionMethodId> = INamedResource<I>
