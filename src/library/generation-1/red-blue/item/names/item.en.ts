import { ItemId } from '../item.indices'
import { RawNames, UpperCaseNameList } from '~/library/i18n/name.factory'

export const ItemEnglishRawNames = RawNames<ItemId>({
	'thunder-stone': ['Thunderstone'],
	'water-stone': ['Water Stone'],
	'fire-stone': ['Fire Stone'],
	'moon-stone': ['Moon Stone'],
	'leaf-stone': ['Leaf Stone'],
})

export const ItemEnglishNames = () => UpperCaseNameList('en')(ItemEnglishRawNames)
