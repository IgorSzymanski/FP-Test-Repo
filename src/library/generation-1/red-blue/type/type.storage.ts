import { IType } from './type.interface'
import { map } from 'ramda'
import { applyNameStorage } from '~/library/i18n/name.factory'
import { Storage, addUq } from '~/library/storage/storage.factory'
import { TypeEnglishNames } from './names/type.en'
import { TypeJapaneseNames } from './names/type.ja'
import { addDamageClass } from '../damage-class/damage-class.factory'

export const TypeData = Storage<IType>([
	addUq({ id: 'normal', damageClass: addDamageClass('physical') }),
	addUq({ id: 'fire', damageClass: addDamageClass('special') }),
	addUq({ id: 'water', damageClass: addDamageClass('special') }),
	addUq({ id: 'electric', damageClass: addDamageClass('special') }),
	addUq({ id: 'grass', damageClass: addDamageClass('special') }),
	addUq({ id: 'ice', damageClass: addDamageClass('special') }),
	addUq({ id: 'fighting', damageClass: addDamageClass('physical') }),
	addUq({ id: 'poison', damageClass: addDamageClass('physical') }),
	addUq({ id: 'ground', damageClass: addDamageClass('physical') }),
	addUq({ id: 'flying', damageClass: addDamageClass('physical') }),
	addUq({ id: 'psychic', damageClass: addDamageClass('special') }),
	addUq({ id: 'bug', damageClass: addDamageClass('physical') }),
	addUq({ id: 'rock', damageClass: addDamageClass('physical') }),
	addUq({ id: 'ghost', damageClass: addDamageClass('physical') }),
	addUq({ id: 'dragon', damageClass: addDamageClass('special') }),
	map(applyNameStorage([TypeEnglishNames, TypeJapaneseNames])),
	// map((type) => ({
	// 	...type,
	// 	get pokemonModels(): (IPokemon | undefined)[] {
	// 		return PokemonData.filter((pokemon) =>
	// 			pokemon.types ? pokemon.types.some((t) => t === type.id) : false
	// 		)
	// 	},
	// })),
])([])
