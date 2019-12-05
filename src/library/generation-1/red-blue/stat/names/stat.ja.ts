import { StatId } from '../stat.indices'
import { RawNames, JapaneseNameList } from '~/library/i18n/name.factory'

export const StatJapaneseRawNames = RawNames<StatId>({
	hp: ['ＨＰ'],
	attack: ['こうげき'],
	defense: ['ぼうぎょ'],
	special: ['とくしゅ'],
	speed: ['すばやさ'],
})

export const StatJapaneseNames = () => JapaneseNameList(StatJapaneseRawNames)
