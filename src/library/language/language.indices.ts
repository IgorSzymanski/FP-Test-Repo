import { ID } from '../../value-objects/id'
import { ValuesOf } from '../helpers'

export const LanguageIds = [ID('en'), ID('pl'), ID('ja'), ID('he')]

export type LanguageId = ValuesOf<typeof LanguageIds>
