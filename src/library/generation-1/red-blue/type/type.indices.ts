import { ValuesOf } from '~library/helpers'
import { ID } from '~/value-objects/id'

export const TypeIds = [
	ID('normal'),
	ID('fire'),
	ID('water'),
	ID('electric'),
	ID('grass'),
	ID('ice'),
	ID('fighting'),
	ID('poison'),
	ID('ground'),
	ID('flying'),
	ID('psychic'),
	ID('bug'),
	ID('rock'),
	ID('ghost'),
	ID('dragon'),
]

export type TypeId = ValuesOf<typeof TypeIds>
