import { IPokemon } from './pokemon.interface'
import { PokemonId } from './pokemon.indices'
import { flatten } from 'ramda'
import { IData } from '~library/interfaces/data.interface'
import { IStorage } from '~library/storage/storage.interface'
import { FactoryIDs, FactoryID } from '~/library/storage/storage.factory'
import { PokemonStorage } from './pokemon.storage'

export const addPokemon = FactoryID(PokemonStorage)
export const addPokemons = FactoryIDs(PokemonStorage)

export const findById = <D extends IData<C>, C extends string>(store: IStorage<D>) => (id: C) =>
	store.find((pokemon) => pokemon.id === id)

export const findPreevolutions = (store: IStorage<IPokemon>) => (pokemon: IPokemon): IPokemon[] =>
	store.filter((pkmn) =>
		(pkmn.evolutions || []).some((evolution) => evolution.pokemon()?.id === pokemon.id)
	)

export const findEvolutionRoot = (store: () => IStorage<IPokemon>) => (
	pokemon: IPokemon
): PokemonId[] => {
	const preevolutions = findPreevolutions(store())(pokemon)

	return preevolutions.length
		? flatten([...new Set(preevolutions.map(findEvolutionRoot(store)))])
		: [pokemon.id]
}

export const addEvolutionRoots = (store: IPokemon[]) =>
	store.map((pokemon) => ({
		...pokemon,
		evolutionRoots: () => addPokemons(findEvolutionRoot(() => store)(pokemon))(),
	}))

export const addPreevolutions = (store: IPokemon[]) =>
	store.map((pokemon) => ({
		...pokemon,
		preevolutions: () => addPokemons(findPreevolutions(store)(pokemon).map((pkm) => pkm.id))(),
	}))
