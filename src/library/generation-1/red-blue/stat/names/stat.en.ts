import { StatId } from '../stat.indices'
import { RawNames, UpperCaseNameList } from '~/library/i18n/name.factory'

export const StatEnglishRawNames = RawNames<StatId>({
	hp: ['HP'],
	attack: ['Attack'],
	defense: ['Defense'],
	special: ['Special'],
	speed: ['Speed'],
})

export const StatEnglishNames = () => UpperCaseNameList('en')(StatEnglishRawNames)
