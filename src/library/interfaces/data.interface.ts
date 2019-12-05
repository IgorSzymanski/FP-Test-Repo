import { ID } from '../../value-objects/id'

export type IData<I extends string = string> = {
	id: ID<I>
}
