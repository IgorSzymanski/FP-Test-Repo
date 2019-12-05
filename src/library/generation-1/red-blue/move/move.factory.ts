import { IMove } from './move.interface'
import { MoveData } from './move.storage'
import { FactoryID, FactoryIDs } from '~/library/storage/storage.factory'

export const addMove = FactoryID(MoveData)
export const addMoves = FactoryIDs(MoveData)

export const assignCategoryByType = <M extends IMove>(move: M): M =>
	// @ts-ignore
	move.type && !move.damageClass ? { ...move } : move
