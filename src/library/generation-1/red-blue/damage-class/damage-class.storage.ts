import { IDamageClass } from './damage-class.interface'
import { map } from 'ramda'
import { applyNameStorage } from '~/library/i18n/name.factory'
import { Storage, addUq } from '~/library/storage/storage.factory'
import { DamageClassEnglishNames } from './names/type.en'
import { DamageClassJapaneseNames } from './names/type.ja'

export const DamageClassStorage = Storage<IDamageClass>([
	addUq({ id: 'special' }),
	addUq({ id: 'physical' }),
	addUq({ id: 'status' }),
	map(applyNameStorage([DamageClassEnglishNames, DamageClassJapaneseNames])),
])

export const DamageClassData = DamageClassStorage([])
