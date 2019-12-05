import { ItemId } from '../item.indices'
import { RawNames, JapaneseNameList } from '~/library/i18n/name.factory'

export const ItemJapaneseRawNames = RawNames<ItemId>({
	'thunder-stone': ['かみなりのいし'],
	'water-stone': ['みずのいし'],
	'fire-stone': ['ほのおのいし'],
	'moon-stone': ['つきのいし'],
	'leaf-stone': ['リーフのいし'],
})

export const ItemJapaneseNames = () => JapaneseNameList(ItemJapaneseRawNames)
