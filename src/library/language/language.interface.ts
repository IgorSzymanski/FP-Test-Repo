import { INamedResource } from '../interfaces/named-resource.interface'
import { LanguageId } from './language.indices'

export type ILanguage<I extends LanguageId = LanguageId> = INamedResource<I>
