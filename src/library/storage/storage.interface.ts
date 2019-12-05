import { IData } from '../interfaces/data.interface'
export type IStorage<D> = D[]
export type StorageType<T> = T extends IStorage<infer R> ? R : string
export type DataId<T> = T extends IData<infer R> ? R : string
export type StorageIdType<T> = StorageType<DataId<T>>
export type IStorageFunction<D> = (storage: D[]) => D[]
export type IDataFunction<D> = (storage: D[]) => D
export type IDataFunctionOrData<D> = IDataFunction<D> | D
export type IDataFunctionModyfing<D, X extends D[]> = IDataFunction<D> | StorageType<X>
export type IDataEditor<D> = (data: D) => D
