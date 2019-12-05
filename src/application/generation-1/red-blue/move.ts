import NamedInterface, { NamedFields } from '../../named.interface'
import { IMove } from '~generation-1/red-blue/move/move.interface'
import { MoveData } from '~/library/generation-1/red-blue/move/move.storage'
import { SchemaComposer } from '~/application/schema-composer'
import Type from './type'
import DamageClass from './damage-class'

export const Move = SchemaComposer.createObjectTC<IMove>({
	interfaces: [NamedInterface],
	name: 'RedBlue_Move',
	fields: {
		...NamedFields,
		type: () => Type,
		powerPoints: 'Int',
		basePower: 'Int',
		accuracy: 'Int',
		effectRate: 'Int',
		//  technicalMachine: any,
		speedPriority: 'Int',
		//  target: any,
		damageClass: () => DamageClass,
	},
})

export const LevelUpMove = SchemaComposer.createObjectTC<IMove>({
	name: 'RedBlue_LevelUpMove',
	fields: {
		level: 'Int',
		move: () => Move.getTypeNonNull(),
	},
})

Move.addResolver<IMove>({
	kind: 'query',
	name: 'findMany',
	type: () =>
		Move.getTypeNonNull()
			.getTypePlural()
			.getTypeNonNull(),
	resolve: () => MoveData,
})

SchemaComposer.Query.addFields({
	listMoves: Move.getResolver('findMany'),
})

export default Move
