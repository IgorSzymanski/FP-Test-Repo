import {
	IStorageFunction,
	IStorage,
	IDataFunctionOrData,
	IDataFunctionModyfing,
} from './storage.interface'
import { IData } from '~library/interfaces/data.interface'

const find = <D extends IData<I>, I extends string>(fn: (a: D) => boolean) => (
	list: readonly D[]
): D | undefined => list.find(fn)

export const Storage = <D>(pipes: IStorageFunction<D>[]) => (x: D[]) => (): D[] =>
	pipes.reduce((v: D[], f) => f(v), x)

export const addUnique = <D, S extends IStorage<D>>(f: IDataFunctionModyfing<D, S>) => <
	S extends IStorage<D>
>(
	storage: S
) => storage.concat(f instanceof Function ? f(storage) : f)

export const add = <D extends IData, S extends D[]>(f: IDataFunctionModyfing<D, S>) => (
	storage: D[]
) => storeDataInStorageIfUnique(storage)(getData(storage)(f))

export const storeDataInStorageIfUnique = <D extends IData>(storage: D[]) => <N extends D>(
	data: N
) => (findInStorageById(data.id)(storage) ? storage : storage.concat(data))

export const update = <D, S extends IStorage<D>>(f: IDataFunctionModyfing<D, S>) => <
	S extends IStorage<D>
>(
	storage: S
) => storage.concat(f instanceof Function ? f(storage) : f)

export const findInStorageById = <D extends IData>(id: IDType<D>) =>
	find((element: D) => element.id === id)

export const findById = <D extends IData>(storage: D[]) => <I extends IDType<D>>(id: I) =>
	findInStorageById<D>(id)(storage)

/** alias */
export const addUq = addUnique

/** alias */
export const findInStorage = find

/** private */
const getData = <D>(storage: D[]) => (funcOrData: IDataFunctionOrData<D>) =>
	funcOrData instanceof Function ? funcOrData(storage) : funcOrData

export const isNotNullable = <V>(value: V): value is NonNullable<V> => !!value

export const notNull = <V>(value?: V): V => {
	if (value) {
		return value
	} else {
		throw new Error('Value cannot be nullable.')
	}
}

export type IDType<Type> = Type extends IData<infer X> ? X : never

export const FactoryID = <D extends IData>(storage: () => D[]) => <I extends IDType<D>>(
	id?: I
) => (): D & IData<I> => {
	// @ts-ignore
	return (
		findById<D>(storage())(notNull(id)) ??
		(() => {
			throw new Error()
		})()
	)
}

export const FactoryIDs = <D extends IData>(storage: () => D[]) => <I extends IDType<D>>(
	id?: I[]
) => (): (D & IData<I>)[] =>
	// @ts-ignore
	id?.map(findById(storage())).filter(isNotNullable)

export type SpecificIDs<T extends string[], D extends IData> = { [P in keyof T]: D }

export const FactorySpecificIDs = <D extends IData>(storage: () => D[]) => <I extends IDType<D>[]>(
	id?: I
) => (): SpecificIDs<I, D> =>
	// @ts-ignore
	id?.map(findById(storage())).filter(isNotNullable)

export const TupleMap = <D extends G[], G extends any, R extends any>(arr: D, f: (x: G) => R) =>
	arr.map(f)

// Collections

export const Collection = <I extends IData>(pipes: IStorageFunction<InputType<I>>[]) => (
	x: InputType<I>[]
): InputType<I>[] => pipes.reduce((v: InputType<I>[], f) => f(v), x)

export type ToOne<D extends IData> = () => D
export type ToMany<D extends IData> = () => D[]
export type ToSpecific<D extends IData[]> = () => D
export type Specific<T> = { [P in keyof T]: T[P] extends IData ? T[P]['id'] : T[P] }

export type Primitive = string | number | boolean

export type InputType<T = any> = T extends Primitive
	? T
	: {
			[P in keyof T]: T[P] extends Array<infer A>
				? Array<InputType<A>>
				: NonNullable<T[P]> extends ToSpecific<infer M>
				? Specific<M>
				: NonNullable<T[P]> extends ToMany<infer M>
				? M['id'][]
				: NonNullable<T[P]> extends ToOne<infer O>
				? O['id']
				: InputType<T[P]>
	  }

export const StorageToData = <D extends IData>(s: D[]) => <R>(f?: (e: D) => R) =>
	s.reduce((p, c, _i, _a) => {
		return { ...p, [c.id]: f ? f(c) : c }
	}, <{ [key in D['id']]: R }>{})

export const CollectionInit = <T extends IData<I>, I extends string = T['id']>(ids: I[]) =>
	ids.map((id) => ({ id }))

export type ExtraData<D extends IData, K> = {
	[key in InputType<D>['id']]?: K extends keyof InputType<D> ? InputType<D>[K] : any
}