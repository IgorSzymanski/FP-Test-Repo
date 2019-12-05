import { INamedResource } from '~/library/interfaces/named-resource.interface'
import { MoveId } from './move.indices'
import { IType } from '../type/type.interface'
import { IDamageClass } from '../damage-class/damage-class.interface'

export type IMove<I extends MoveId = MoveId> = INamedResource<I> & {
	readonly type?: () => IType
	readonly powerPoints?: number
	readonly basePower?: number
	readonly accuracy?: number
	readonly effectRate?: number
	readonly technicalMachine?: any
	readonly speedPriority?: number
	readonly target?: any
	readonly damageClass?: () => IDamageClass
}

export type ILevelUpMoveInput = {
	readonly move: MoveId
	readonly level?: number | null
}

export type ILevelUpMove = {
	readonly move: () => IMove
	readonly level?: number | null
}
