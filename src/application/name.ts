import { SchemaComposer } from '~/application/schema-composer'
import { IName } from '~/library/i18n/name.interface'
import Language from './language'

export const Name = SchemaComposer.createObjectTC<IName>({
	name: 'Name',
	fields: {
		value: 'String!',
		language: () => Language.getTypeNonNull(),
		romanization: {
			type: 'String',
			resolve(parent, _args) {
				return parent.romanization
			},
		},
	},
})
