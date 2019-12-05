import { IRawNames } from '~/library/i18n/name.interface'
import { DamageClassId } from '../damage-class.indices'
import { JapaneseNameList } from '~/library/i18n/name.factory'

export const DamageClassJapaneseRawNames: IRawNames<DamageClassId> = {
	special: ['[特殊](とくしゅ)技(わざ)'],
	physical: ['[物理](ぶつり)技(わざ)'],
	status: ['[変化](へんか)技(わざ)'],
}

export const DamageClassJapaneseNames = () => JapaneseNameList(DamageClassJapaneseRawNames)
