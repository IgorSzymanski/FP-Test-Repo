import { INamedResource } from '../../../interfaces/named-resource.interface'
import { StatId } from './stat.indices'

export type IStat<I extends StatId = StatId> = INamedResource<I>

export type IStatValue<I extends StatId = StatId> = {
	stat: () => IStat<I>
	value: number
}

export type IStatValueInput<I extends StatId = StatId> = {
	stat: I
	value: number
}

export type IStatValues = [
	IStatValue<'hp'>,
	IStatValue<'attack'>,
	IStatValue<'defense'>,
	IStatValue<'special'>,
	IStatValue<'speed'>
]

export type IStatValuesInput = [
	IStatValueInput<'hp'>,
	IStatValueInput<'attack'>,
	IStatValueInput<'defense'>,
	IStatValueInput<'special'>,
	IStatValueInput<'speed'>
]
