import { SchemaComposer } from '~/application/schema-composer'
import { ILanguage } from '~/library/language/language.interface'
import { NamedFields } from './named.interface'
import NamedInterface from './named.interface'

export const Language = SchemaComposer.createObjectTC<ILanguage>({
	interfaces: [NamedInterface],
	name: 'Language',
	fields: {
		...NamedFields,
	},
})

export default Language
