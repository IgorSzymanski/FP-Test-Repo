import { Storage, addUq } from '~/library/storage/storage.factory'
import { IStat } from './stat.interface'
import { applyNameStorage } from '~/library/i18n/name.factory'
import { map } from 'ramda'
import { StatEnglishNames } from './names/stat.en'
import { StatJapaneseNames } from './names/stat.ja'

export const StatStorage = Storage<IStat>([
	addUq({ id: 'hp' }),
	addUq({ id: 'attack' }),
	addUq({ id: 'defense' }),
	addUq({ id: 'special' }),
	addUq({ id: 'speed' }),
	map(applyNameStorage([StatEnglishNames, StatJapaneseNames])),
])

export const StatData = StatStorage([])
