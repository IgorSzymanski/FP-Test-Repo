// import { ILanguage } from '~/library/language/language.interface';
// import { LanguageId } from '~/library/language/language.indices';
import { IVersion } from '../version/version.interface'
import { IRawDescriptions } from '~/library/i18n/description.interface'
import { VersionId } from '../version/version.indices'
import { addVersion } from '../version/version.factory'
import { mapObject } from '~/library/helpers'
import { JapaneseRedRawEntries } from './ja/entry.red'

export type IVersionedEntry<V extends VersionId = VersionId> = {
	value: string
	version: () => IVersion<V>
}

export const makeDescriptions = <I extends string, V extends VersionId>(
	data: { source: () => IRawDescriptions<I>; version: () => IVersion<V> }[]
) =>
	data.map(({ source, version }) =>
		mapObject<I, string, IVersionedEntry<V>>((value) => ({ value, version }))(source())
	)

export const elo = makeDescriptions([
	{ source: () => JapaneseRedRawEntries, version: addVersion('red') },
])
