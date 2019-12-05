import { ToMany, ToOne, ToSpecific } from '~/library/storage/storage.factory'

import { INamedResource } from '~/library/interfaces/named-resource.interface'
import { IImage } from '~/library/interfaces/image.interface'

import { PokemonId } from './pokemon.indices'

import { ILevelUpMove, IMove } from '../move/move.interface'
import { IEvolution } from '../evolution-method/evolution-condition.interface'
import { IType } from '../type/type.interface'
import { IStatValues } from '../stat/stat.interface'
import { IVersion } from '../version/version.interface'
import { IGrowthRate } from '../growth-rate/growth-rate.interface'
import { IClassification } from '../classification/classification.interface'

export type IPokemon<I extends PokemonId = PokemonId> = INamedResource<I> & {
	readonly number?: number
	readonly types?: ToSpecific<[IType] | [IType, IType]>
	readonly weight?: number
	readonly height?: number
	readonly catchRate?: number
	readonly colour?: PokemonColour
	readonly icon?: PokemonIcon
	readonly index?: number
	readonly moves?: ILevelUpMove[]
	readonly machineMoves?: ToMany<IMove>
	readonly baseStats?: IStatValues
	readonly effortValues?: IStatValues
	readonly status?: PokemonStatus
	readonly growthRate?: ToOne<IGrowthRate>
	readonly baseEXP?: number
	readonly evolutions?: IEvolution[]
	readonly encounters?: IEncounter[]

	// ToDo: This
	readonly preevolutions?: ToMany<IPokemon>
	readonly evolutionRoots?: ToMany<IPokemon>
	readonly entries?: any[]
	readonly artwork?: IImage
	readonly thumbnail?: IImage
	readonly classification?: ToOne<IClassification>
	readonly next?: ToOne<IPokemon>
	readonly previous?: ToOne<IPokemon>
}

export type IEncounter = {
	locationArea: string
	version: ToOne<IVersion>
	encounterDetails: IEncounterDetail[]
}

export type IEncounterDetail = {
	chance: number
	minLevel: number
	maxLevel: number
	method: EncounterMethod
}

export type EncounterMethod = 'walk' | 'super-rod' | 'good-rod' | 'old-rod' | 'surf'

export type PokemonStatus = 'starter' | 'fossil' | 'pseudo-legendary' | 'mythical' | 'legendary'

export type PokemonIcon =
	| 'monster'
	| 'bug'
	| 'fairy'
	| 'snake'
	| 'quadruped'
	| 'grass'
	| 'water'
	| 'bird'
	| 'ball'
	| 'helix'

export type PokemonColour =
	| 'green'
	| 'red'
	| 'cyan'
	| 'yellow'
	| 'purple'
	| 'blue'
	| 'pink'
	| 'brown'
	| 'grey'
	| 'mew'
