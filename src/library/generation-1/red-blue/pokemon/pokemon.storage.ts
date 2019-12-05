import { Storage, InputType } from '~/library/storage/storage.factory'
import { IPokemon } from './pokemon.interface'

// import { map } from 'ramda'

// import './pokemon.data'
import { PokemonData } from './pokemon.data'
import { addMoves, addMove } from '../move/move.factory'
import { addTypes } from '../type/type.factory'
import { addPokemon } from './pokemon.factory'
import { addEvolutionMethod } from '../evolution-method/evolution-method.factory'
import { addStat } from '../stat/stat.factory'
import { IStatValues } from '../stat/stat.interface'
import { addGrowthRate } from '../growth-rate/growth-rate.factory'

export const Pokemon = ({
	id,
	number,
	types,
	height,
	weight,
	baseEXP,
	machineMoves,
	moves,
	growthRate,
	baseStats,
	evolutions,
}: InputType<IPokemon>): IPokemon => ({
	id,
	number,
	height,
	weight,
	baseEXP,
	types: addTypes(types),
	machineMoves: addMoves(machineMoves),
	moves: moves?.map((group) => ({ ...group, move: addMove(group.move) })),
	growthRate: addGrowthRate(growthRate),
	encounters: [],
	baseStats: <IStatValues | undefined>(
		baseStats?.map(({ stat, value }) => ({ value, stat: addStat(stat) }))
	),
	effortValues: <IStatValues | undefined>(
		baseStats?.map(({ stat, value }) => ({ value, stat: addStat(stat) }))
	),
	evolutions: evolutions?.map(({ pokemon, conditions }) => ({
		pokemon: addPokemon(pokemon),
		conditions: conditions?.map((condition) => ({
			...condition,
			method: addEvolutionMethod(condition.method),
		})),
	})),
})

export const PokemonStorage = Storage<IPokemon>([])(PokemonData.map(Pokemon))
