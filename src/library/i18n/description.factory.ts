import { IRawDescriptions } from './description.interface'

export const RawDescriptions = <
	K extends string,
	D extends IRawDescriptions<K> = IRawDescriptions<K>
>(
	def: D
) => def
