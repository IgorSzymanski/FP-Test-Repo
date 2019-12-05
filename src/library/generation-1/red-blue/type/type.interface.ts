import { TypeId } from './type.indices'
import { INamedResource } from '~/library/interfaces/named-resource.interface'
import { IDamageClass } from '../damage-class/damage-class.interface'

export type IType<I extends TypeId = TypeId> = INamedResource<I> & {
	damageClass?: () => IDamageClass
}
