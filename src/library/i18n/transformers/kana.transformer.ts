import { IName } from '../name.interface'
import { kanaToRomaji } from '../../helpers'
import { Name } from '../name.factory'

export const kanaTransformer = (f: typeof Name) => (name: string): IName => ({
	...f('ja')(name),
	romanization: kanaToRomaji(name),
})

export const JapaneseName = kanaTransformer(Name)
