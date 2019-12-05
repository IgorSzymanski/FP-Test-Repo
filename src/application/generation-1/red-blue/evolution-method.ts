import NamedInterface, { NamedFields } from '../../named.interface'
import { IEvolutionMethod } from '~generation-1/red-blue/evolution-method/evolution-method.interface'
import { EvolutionMethodData } from '~/library/generation-1/red-blue/evolution-method/evolution-method.storage'
import { SchemaComposer } from '~/application/schema-composer'

export const EvolutionMethod = SchemaComposer.createObjectTC<IEvolutionMethod>({
	interfaces: [NamedInterface],
	name: 'RedBlue_EvolutionMethod',
	fields: {
		...NamedFields,
	},
})

EvolutionMethod.addResolver<IEvolutionMethod>({
	kind: 'query',
	name: 'findMany',
	type: () =>
		EvolutionMethod.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: () => EvolutionMethodData(),
})

SchemaComposer.Query.addFields({
	listEvolutionMethods: EvolutionMethod.getResolver('findMany'),
})

export default EvolutionMethod
