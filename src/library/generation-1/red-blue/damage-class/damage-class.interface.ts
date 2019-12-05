import { DamageClassId } from './damage-class.indices'
import { INamedResource } from '~/library/interfaces/named-resource.interface'

export type IDamageClass<I extends DamageClassId = DamageClassId> = INamedResource<I>
