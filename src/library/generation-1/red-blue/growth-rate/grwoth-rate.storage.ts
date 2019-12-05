import { Storage, addUq } from '~/library/storage/storage.factory'
import { IGrowthRate } from './growth-rate.interface'

export const GrowthRateStorage = Storage<IGrowthRate>([
	addUq({
		id: 'erratic',
	}),
	addUq({
		id: 'fast',
	}),
	addUq({
		id: 'fluctuating',
	}),
	addUq({
		id: 'medium-fast',
	}),
	addUq({
		id: 'medium-slow',
	}),
	addUq({
		id: 'slow',
	}),
])

export const GrowthRateData = GrowthRateStorage([])
