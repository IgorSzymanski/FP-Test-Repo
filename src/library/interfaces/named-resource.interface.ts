import { IName } from '../i18n/name.interface'
import { LanguageId } from '../language/language.indices'
import { IData } from './data.interface'

export type INamedResource<I extends string = string> = IData<I> & {
	readonly names?: IName<LanguageId>[]
}
