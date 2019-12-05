import { EvolutionMethodId } from '../evolution-method.indices'
import { RawNames, UpperCaseNameList } from '~/library/i18n/name.factory'

export const EvolutionMethodEnglishRawNames = RawNames<EvolutionMethodId>({
	level: ['Leveling up'],
	item: ['Using an item'],
	trade: ['Trading'],
})

export const EvolutionMethodEnglishNames = () =>
	UpperCaseNameList('en')(EvolutionMethodEnglishRawNames)
