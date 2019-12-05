import { IPokemon } from '../pokemon/pokemon.interface'
import { IEvolutionMethod } from '~generation-1/red-blue/evolution-method/evolution-method.interface'
import { ToOne } from '~/library/storage/storage.factory'
import { IItem } from '~/library/generation-1/red-blue/item/item.interface'
import { EvolutionMethodId } from './evolution-method.indices'

export type IEvolution = {
	pokemon: () => IPokemon
	conditions?: IEvolutionCondition[]
}

export type IEvolutionCondition<I extends EvolutionMethodId = EvolutionMethodId> =
	| IBaseEvolutionCondition<I>
	| ILevelEvolutionCondition
	| IItemEvolutionCondition
	| ITradeEvolutionCondition

export type IEvolutionConditionUnion = ILevelEvolutionCondition &
	IItemEvolutionCondition &
	ITradeEvolutionCondition

export type IBaseEvolutionCondition<I extends EvolutionMethodId = EvolutionMethodId> = {
	method: () => IEvolutionMethod<I>
}

export type ILevelEvolutionCondition = IBaseEvolutionCondition<'level'> & {
	level: number
}

export type IItemEvolutionCondition = IBaseEvolutionCondition<'item'> & {
	item: ToOne<IItem>
}

export type ITradeEvolutionCondition = IBaseEvolutionCondition<'trade'>
