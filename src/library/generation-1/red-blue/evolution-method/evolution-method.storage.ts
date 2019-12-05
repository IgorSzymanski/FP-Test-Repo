import { IEvolutionMethod } from './evolution-method.interface'
import { Storage, addUq } from '~/library/storage/storage.factory'
import { applyNameStorage } from '~/library/i18n/name.factory'
import { EvolutionMethodEnglishNames } from './names/evolution-method.en'
import { map } from 'ramda'
import { EvolutionMethodJapaneseNames } from './names/evolution-method.ja'

export const EvolutionMethod = (data: IEvolutionMethod): IEvolutionMethod => ({ ...data })

export const EvolutionMethodData = Storage<IEvolutionMethod>([
	addUq(
		EvolutionMethod({
			id: 'level',
		})
	),
	addUq(
		EvolutionMethod({
			id: 'item',
		})
	),
	addUq(
		EvolutionMethod({
			id: 'trade',
		})
	),
	map(applyNameStorage([EvolutionMethodEnglishNames, EvolutionMethodJapaneseNames])),
])([])
