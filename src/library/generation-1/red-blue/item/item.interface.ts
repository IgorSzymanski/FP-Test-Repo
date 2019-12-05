import { ItemId } from './item.indices'
import { INamedResource } from '~/library/interfaces/named-resource.interface'

export type IItem<I extends ItemId = ItemId> = INamedResource<I>
