import NamedInterface, { NamedFields } from '../../named.interface'
import { IType } from '~generation-1/red-blue/type/type.interface'
import { TypeData } from '~/library/generation-1/red-blue/type/type.storage'
import { SchemaComposer } from '~/application/schema-composer'
import DamageClass from './damage-class'

export const Type = SchemaComposer.createObjectTC<IType>({
	interfaces: [NamedInterface],
	name: 'RedBlue_Type',
	fields: {
		...NamedFields,
		damageClass: () => DamageClass,
	},
})

Type.addResolver<IType>({
	kind: 'query',
	name: 'findMany',
	type: () =>
		Type.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: () => TypeData(),
})

SchemaComposer.Query.addFields({
	listTypes: Type.getResolver('findMany'),
})

export default Type
