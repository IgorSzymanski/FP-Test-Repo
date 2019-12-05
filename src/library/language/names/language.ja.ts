import { LanguageId } from '../language.indices'
import { IRawNames } from '~/library/i18n/name.interface'
import { NameListFactory } from '../language.storage'

export const LanguageJapaneseRawNames: IRawNames<LanguageId> = {
	en: ['英語'],
	ja: ['日本語'],
	pl: ['ポーランド語'],
}

export const LanguageJapaneseNames = () => NameListFactory('ja')(LanguageJapaneseRawNames)
