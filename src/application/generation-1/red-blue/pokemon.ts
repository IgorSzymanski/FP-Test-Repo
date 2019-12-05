import { IPokemon } from '~/library/generation-1/red-blue/pokemon/pokemon.interface'
import { PokemonStorage } from '~/library/generation-1/red-blue/pokemon/pokemon.storage'
import NamedInterface, { NamedFields } from '../../named.interface'
import Image from '~/application/image'
import { SchemaComposer } from '~/application/schema-composer'
import Type from './type'
import composeWithPagination from 'graphql-compose-pagination'
import { StatValue } from './stat'
import { LevelUpMove } from './move'
import Move from './move'

export const Pokemon = SchemaComposer.createObjectTC<IPokemon>({
	interfaces: [NamedInterface],
	name: 'RedBlue_Pokemon',
	fields: {
		...NamedFields,
		number: 'Int',
		weight: 'Float',
		height: 'Float',
		thumbnail: () => Image,
		artwork: () => Image,
		icon: () => Image,
		types: () => [Type.getTypeNonNull()],
		// classification: ${ns}Classification,
		catchRate: 'Int',
		moves: () => [LevelUpMove.getTypeNonNull()],
		machineMoves: () => [Move.getTypeNonNull()],
		baseStats: () => [StatValue.getTypeNonNull()],
		effortValues: () => [StatValue.getTypeNonNull()],
		status: 'String',
		// growthRate: ${ns}GrowthRate,
		baseEXP: 'Int',
		evolutionRoots: () => [Pokemon.getTypeNonNull()],
		// evolutions: [${ns}Evolution!],
		preevolutions: () => [Pokemon.getTypeNonNull()],
		// next: ${ns}Pokemon,
		// previous: ${ns}Pokemon,
	},
})

Pokemon.addResolver<IPokemon, { skip: number; limit: number }>({
	kind: 'query',
	name: 'findMany',
	args: {
		limit: 'Int',
		skip: 'Int',
	},
	type: () =>
		Pokemon.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: ({ args }: any) =>
		PokemonStorage()
			.slice(args.skip)
			.slice(0, args.limit),
})

Pokemon.addResolver<IPokemon>({
	kind: 'query',
	name: 'count',
	type: 'Int!',
	resolve: () => PokemonStorage().length,
})

Pokemon.addResolver<IPokemon>({
	kind: 'query',
	name: 'findOne',
})

composeWithPagination(Pokemon, {
	findResolverName: 'findMany',
	countResolverName: 'count',
})

SchemaComposer.Query.addFields({
	listPokemon: Pokemon.getResolver('findMany'),
	countPokemon: Pokemon.getResolver('count'),
	paginationPokemon: Pokemon.getResolver('pagination'),
})

export default Pokemon
