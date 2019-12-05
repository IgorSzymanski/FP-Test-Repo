import { EvolutionMethodId } from '../evolution-method.indices'
import { RawNames, SimpleNameList } from '~/library/i18n/name.factory'

export const EvolutionMethodJapaneseRawNames = RawNames<EvolutionMethodId>({
	level: ['レベルアップ'],
	item: ['しんかのいし'],
	trade: ['[通信](つうしん)[交換](こうかん)'],
})

export const EvolutionMethodJapaneseNames = () =>
	SimpleNameList('ja')(EvolutionMethodJapaneseRawNames)
