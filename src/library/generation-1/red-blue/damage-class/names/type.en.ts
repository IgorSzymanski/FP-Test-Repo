import { DamageClassId } from '../damage-class.indices'
import { IRawNames } from '~/library/i18n/name.interface'
import { UpperCaseNameList } from '~/library/i18n/name.factory'

export const DamageClassEnglishRawNames: IRawNames<DamageClassId> = {
	special: ['Special'],
	physical: ['Physical'],
	status: ['Status'],
}

export const DamageClassEnglishNames = () => UpperCaseNameList('en')(DamageClassEnglishRawNames)
