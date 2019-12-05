import { SchemaComposer } from '~/application/schema-composer'
import { Name } from './name'
import { INamedResource } from '~/library/interfaces/named-resource.interface'

export const NamedFields = {
	id: 'ID!',
	names: () => [Name.getTypeNonNull()],
	name: {
		type: () => Name,
		args: {
			language: 'String',
		},
		resolve: <D extends INamedResource>(source: D, args: { language?: string }) =>
			source.names?.find((name) => name.language()?.id === args.language) ??
			source.names?.[0],
	},
}

const NamedInterface = SchemaComposer.createInterfaceTC<INamedResource>({
	name: 'Named',
	fields: NamedFields,
})

export default NamedInterface
