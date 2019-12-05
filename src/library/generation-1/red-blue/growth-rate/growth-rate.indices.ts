import { ValuesOf } from '~library/helpers'
import { ID } from '~/value-objects/id'

export const GrowthRateIds = [
	ID('erratic'),
	ID('fast'),
	ID('medium-fast'),
	ID('medium-slow'),
	ID('slow'),
	ID('fluctuating'),
]

export type GrowthRateId = ValuesOf<typeof GrowthRateIds>
