import { INamedResource } from '~/library/interfaces/named-resource.interface'
import { GrowthRateId } from './growth-rate.indices'

export type IGrowthRate<I extends GrowthRateId = GrowthRateId> = INamedResource<I>
