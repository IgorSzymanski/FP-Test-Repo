import { LanguageId } from '../language.indices'
import { IRawNames } from '~/library/i18n/name.interface'
import { NameListFactory } from '../language.storage'

export const LanguageEnglishRawNames: IRawNames<LanguageId> = {
	en: ['English'],
	ja: ['Japanese'],
	pl: ['Polish'],
}

export const LanguageEnglishNames = () => NameListFactory('en')(LanguageEnglishRawNames)
