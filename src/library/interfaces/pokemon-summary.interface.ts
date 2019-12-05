import { IName } from '../i18n/name.interface'

export type IPokemonSummary<
	ID extends string = string,
	TypeID extends string = string,
	Status extends string = string,
	VersionID extends string = string
> = {
	id: ID
	names?: IName[]
	formNames?: IName[]
	types?: [] | [TypeID] | [TypeID, TypeID]
	status?: Status
	number?: number
	generation?: number
	exclusiveTo?: VersionID[]
}
