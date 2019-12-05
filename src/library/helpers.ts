//@ts-ignore
import * as kuroshiro from 'kuroshiro'

export type ValuesOf<T extends any[]> = T[number]
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const add = (x: number) => (y: number) => x + y
export const multiply = <X extends number>(x: X) => (y: number) => x * y
export const toNumber = (x: any): number => Number(x)
export const breakInference = <X>(x: X) => x
export const pluck = <X>(key: keyof X) => <O extends X>(object: O): O[keyof X] => object[key]
export const map = <K, Z>(fn: (arg: K) => Z) => (array: K[]) => array.map(fn)
export const call = <A, B>(f: (x: A) => B) => (x: A) => f(x)
export const getPropertyByName = <T, K extends keyof T>(object: T, key: K) => object[key]
export const kanaToRomaji = (text: string): string => kuroshiro.Util.kanaToRomaji(text)

export const mapObject = <I extends string, V, R>(f: (value: V) => R) => (
	object: { [key in I]?: V }
) =>
	(<I[]>Object.keys(object)).reduce(
		(newObj, key) => (object[key] ? { ...newObj, [key]: f(<V>(<any>object[key])) } : newObj),
		<{ [key in I]: R }>{}
	)

export type Chain<D> = {
	chain: <X>(f: (data: D) => X) => Chain<X>
	extract: () => D
}

export const Chain = <D>(data: D): Chain<D> => ({
	chain: <X>(f: (data: D) => X) => Chain(f(data)),
	extract: () => data,
})

export const unitaryPipe = <D>(pipes: ((data: D) => D)[]): ((data: D) => D) => (x) =>
	pipes.reduce((v, f) => f(v), x)
