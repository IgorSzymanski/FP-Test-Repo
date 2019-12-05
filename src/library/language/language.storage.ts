import { ILanguage } from './language.interface'
import { Storage, addUq, FactoryID } from '../storage/storage.factory'
// @ts-ignore
// import { applyNameStorage } from '../name/name.factory'
// @ts-ignore
import { LanguageEnglishNames } from './names/language.en'
// @ts-ignore
import { LanguageJapaneseNames } from './names/language.ja'
// @ts-ignore
import { map } from 'ramda'
import { IStorage } from '../storage/storage.interface'
import { LanguageId } from './language.indices'
import { IRawNames, INameStorage, IName, INameFactory } from '../i18n/name.interface'

const NameFactory = <ID extends LanguageId>(languageId: ID) => (name: string) => (
	store: () => IStorage<ILanguage>
): IName<ID> => ({
	value: name,
	language: () => FactoryID(store)(languageId)(),
})

export const NameListFactory = <
	L extends LanguageId,
	I extends string = string,
	D extends IRawNames<I> = IRawNames<I>
>(
	language: L
) => <O extends D>(data: O) => (store: () => IStorage<ILanguage>): INameStorage<I, L> =>
	(<I[]>Object.keys(data)).reduce(
		(newObj, key) => ({
			...newObj,
			[key]: NameFactory(language)(data[key]?.[0] ?? '')(
				store
			) /*f(data[key], language, key, data)*/,
		}),
		<INameStorage<I, L>>{}
	)

const addNames = <T extends ILanguage>(pipes: INameFactory<T>[]) => (data: T) => ({
	...data,
	names: [...(data.names || []), ...pipes.map((pipe) => pipe(data)).filter((name) => !!name)],
})

const applyNameStorage = <D extends INameStorage<I>, I extends LanguageId>(data: D[]) =>
	addNames(data.map((storage) => (test: ILanguage<I>) => storage[test.id]))

export const LanguageData: () => IStorage<ILanguage> = Storage<ILanguage>([
	addUq({
		id: 'en',
	}),
	addUq({
		id: 'ja',
	}),
	addUq({
		id: 'pl',
	}),
	map(
		applyNameStorage([
			LanguageEnglishNames()(() => LanguageData()),
			LanguageJapaneseNames()(() => LanguageData()),
		])
	),
])([])
