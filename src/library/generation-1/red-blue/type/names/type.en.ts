import { TypeId } from '../type.indices'
import { IRawNames } from '~/library/i18n/name.interface'
import { UpperCaseNameList } from '~/library/i18n/name.factory'

export const TypeEnglishRawNames: IRawNames<TypeId> = {
	normal: ['Normal'],
	fire: ['Fire'],
	water: ['Water'],
	electric: ['Electric'],
	grass: ['Grass'],
	ice: ['Ice'],
	fighting: ['Fighting'],
	poison: ['Poison'],
	ground: ['Ground'],
	flying: ['Flying'],
	psychic: ['Psychic'],
	bug: ['Bug'],
	rock: ['Rock'],
	ghost: ['Ghost'],
	dragon: ['Dragon'],
}

export const TypeEnglishNames = () => UpperCaseNameList('en')(TypeEnglishRawNames)
