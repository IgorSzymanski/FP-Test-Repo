import { IVersion } from './version.interface'
// import { map } from 'ramda'
// import { applyNameStorage } from '~/library/name/name.factory'
import { Storage, addUq } from '~/library/storage/storage.factory'
// import { VersionEnglishNames } from './names/version.en'
// import { VersionJapaneseNames } from './names/version.ja'

export const VersionData = Storage<IVersion>([
	addUq({
		id: 'red',
	}),
	addUq({
		id: 'blue',
	}),
])([])
