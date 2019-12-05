import { ExtraData } from '~/library/storage/storage.factory'
import { IPokemon } from '../pokemon.interface'

export const PokemonStatus: ExtraData<IPokemon, 'status'> = {
	bulbasaur: 'starter',
	charmander: 'starter',
	squirtle: 'starter',
	omanyte: 'fossil',
	omastar: 'fossil',
	kabuto: 'fossil',
	kabutops: 'fossil',
	aerodactyl: 'fossil',
	articuno: 'legendary',
	zapdos: 'legendary',
	moltres: 'legendary',
	dragonite: 'pseudo-legendary',
	mewtwo: 'legendary',
	mew: 'mythical',
}
