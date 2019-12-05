import { ILanguage } from '../language/language.interface'
import { LanguageId } from '../language/language.indices'
import { IBaseVersion } from '../version/version.interface'

export type IVersionedDescriptionGroup<
	V extends IBaseVersion<I>,
	I extends string = string,
	L extends LanguageId = LanguageId
> = {
	language: () => ILanguage<L>
	entries: IVersionedDescription<V, I>[]
}

export type IVersionedDescription<V extends IBaseVersion<I>, I extends string = string> = {
	version: () => V
	value: string
}

export type IDescriptionGroup<L extends LanguageId = LanguageId> = {
	language: () => ILanguage<L>
	value: string
}

export type IRawVersionedDescriptions<S, K extends string = string> = {
	[key in K]?: S
}

export type IRawDescriptions<K extends string = string> = {
	[key in K]?: string
}
