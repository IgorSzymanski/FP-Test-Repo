import NamedInterface, { NamedFields } from '../../named.interface'
import { IDamageClass } from '~generation-1/red-blue/damage-class/damage-class.interface'
import { DamageClassData } from '~/library/generation-1/red-blue/damage-class/damage-class.storage'
import { SchemaComposer } from '~/application/schema-composer'

export const DamageClass = SchemaComposer.createObjectTC<IDamageClass>({
	interfaces: [NamedInterface],
	name: 'RedBlue_DamageClass',
	fields: {
		...NamedFields,
	},
})

DamageClass.addResolver<IDamageClass>({
	kind: 'query',
	name: 'findMany',
	type: () =>
		DamageClass.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: () => DamageClassData(),
})

SchemaComposer.Query.addFields({
	listDamageClasses: DamageClass.getResolver('findMany'),
})

export default DamageClass
