import NamedInterface, { NamedFields } from '../../named.interface'
import { IStat } from '~generation-1/red-blue/stat/stat.interface'
import { StatData } from '~generation-1/red-blue/stat/stat.storage'
import { SchemaComposer } from '~/application/schema-composer'

export const Stat = SchemaComposer.createObjectTC<IStat>({
	interfaces: [NamedInterface],
	name: 'RedBlue_Stat',
	fields: {
		...NamedFields,
	},
})

export const StatValue = SchemaComposer.createObjectTC<IStat>({
	name: 'RedBlue_StatValue',
	fields: {
		value: 'Int',
		stat: () => Stat.getTypeNonNull(),
	},
})

Stat.addResolver<IStat>({
	kind: 'query',
	name: 'findMany',
	type: () =>
		Stat.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: () => StatData(),
})

SchemaComposer.Query.addFields({
	listStats: Stat.getResolver('findMany'),
})

export default Stat
