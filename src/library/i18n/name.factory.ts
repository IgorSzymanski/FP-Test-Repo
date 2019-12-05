import { IStorage } from '../storage/storage.interface'
import { INamedResource } from '../interfaces/named-resource.interface'
import { LanguageId } from '../language/language.indices'
import { IName, INameFactory, INameStorage } from './name.interface'
import { pipe } from 'ramda'
import { IRawNames } from '~/library/i18n/name.interface'
import { kanaToRomaji } from '../helpers'
import { capitalize } from 'voca'
import { FactoryID } from '../storage/storage.factory'
import { LanguageData } from '~/library/language/language.storage'

export const addLanguage = FactoryID(LanguageData)

export const RawNames = <D extends string, S extends IRawNames<D> = IRawNames<D>>(def: S) => def

export const Name = (language: LanguageId) => (name: string): IName<LanguageId> => ({
	language: () => addLanguage(language)(),
	value: name,
})

export const RomanizedName = (language: LanguageId) => (name: string) => (
	romanization?: string
) => ({
	...Name(language)(name),
	romanization,
})

export const transformText = (f: (text: string) => string) => <X>(g: (text: string) => X) =>
	pipe(f, g)
export const toUppercase = transformText((text) => text.toUpperCase())

export const attachNames = <S extends IStorage<D>, D extends INamedResource>(store: S) => store

export const addName = (name: IName) => <D extends INamedResource>(data: D): D => ({
	...data,
	names: [...(data.names ? data.names : []), name],
})

export const addNames = <T extends INamedResource>(pipes: INameFactory<T>[]) => (data: T) => ({
	...data,
	names: [...(data.names || []), ...pipes.map((pipe) => pipe(data)).filter((name) => !!name)],
})

export const applyNameStorage = <D extends INameStorage<I>, I extends string>(data: (() => D)[]) =>
	addNames(data.map((storage) => (test: INamedResource<I>) => storage()[test.id]))

export const NameList = <
	L extends LanguageId,
	R extends IName<L> = IName<L>,
	I extends string = string,
	D extends IRawNames<I> = IRawNames<I>
>(
	f: (value: D[I], lang: L, key: I, obj: D) => R | undefined
) => (language: L) => <O extends D>(data: O): INameStorage<I, L> =>
	(<I[]>Object.keys(data)).reduce(
		(newObj, key) => ({ ...newObj, [key]: f(data[key], language, key, data) }),
		<INameStorage<I, L>>{}
	)

export const CustomNameList = (f: (names: [string, string?]) => [string, string?]) =>
	NameList((names, lang) => (names ? Name(lang)(f(names)[0]) : undefined))

export const UpperCaseNameList = CustomNameList((names) => [names[0].toUpperCase(), names[1]])

export const JapaneseNameList = NameList((names, lang) =>
	names
		? RomanizedName(lang)(names[0])(names[1] || capitalize(kanaToRomaji(names[0])))
		: undefined
)('ja')

export const SimpleRomanizedNameList = NameList((names, lang) =>
	names ? RomanizedName(lang)(names[0])(names[1]) : undefined
)

export const upperCaseName = <I extends IName>(name: I) => ({
	...name,
	value: name.value.toUpperCase(),
})

export const SimpleNameList = NameList((names, lang) => (names ? Name(lang)(names[0]) : undefined))
