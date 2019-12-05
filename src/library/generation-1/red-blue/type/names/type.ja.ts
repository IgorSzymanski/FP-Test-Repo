import { IRawNames } from '~/library/i18n/name.interface'
import { TypeId } from '../type.indices'
import { JapaneseNameList } from '~/library/i18n/name.factory'

export const TypeJapaneseRawNames: IRawNames<TypeId> = {
	normal: ['ノーマル'],
	fire: ['ほのお'],
	water: ['みず'],
	electric: ['でんき'],
	grass: ['くさ'],
	ice: ['こおり'],
	fighting: ['かくとう'],
	poison: ['どく'],
	ground: ['じめん'],
	flying: ['ひこう'],
	psychic: ['エスパー'],
	bug: ['むし'],
	rock: ['いわ'],
	ghost: ['ゴースト'],
	dragon: ['ドラゴン'],

	// normal: ['ノーマル'],
	// fire: ['炎(ほのお)'],
	// water: ['水(みず)'],
	// electric: ['電(でん)気(き)'],
	// grass: ['茎(くさ)'],
	// ice: ['氷(こおり)'],
	// fighting: ['格(かく)闘(とう)'],
	// poison: ['どく'],
	// ground: ['地(じ)面(めん)'],
	// flying: ['飛(ひ)行(こう)'],
	// psychic: ['エスパー'],
	// bug: ['虫(むし)'],
	// rock: ['岩(いわ)'],
	// ghost: ['ゴースト'],
	// dragon: ['ドラゴン'],
}

export const TypeJapaneseNames = () => JapaneseNameList(TypeJapaneseRawNames)
