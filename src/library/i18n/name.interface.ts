import { LanguageId } from '../language/language.indices'
import { INamedResource } from '../interfaces/named-resource.interface'
import { ILanguage } from '../language/language.interface'

export type IName<L extends LanguageId = LanguageId> = {
	value: string
	language: () => ILanguage<L>
	romanization?: string
}

export type INameMap<I extends string, E extends IName> = Map<I, E>

export type IRawName = [string, string?]

export type IRawNames<I extends string = string> = {
	[key in I]?: IRawName
}

export type INameStorage<I extends string = string, L extends LanguageId = LanguageId> = {
	[key in I]?: IName<L>
}

export type INameFactory<D extends INamedResource = INamedResource> = (data: D) => IName | undefined
