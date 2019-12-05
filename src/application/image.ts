import { SchemaComposer } from '~/application/schema-composer'
import { IImage } from '~/library/interfaces/image.interface'

export const Image = SchemaComposer.createObjectTC<IImage>({
	name: 'Image',
	fields: {
		src: 'String!',
		height: 'Int',
		width: 'Int',
		licensing: 'String',
		summary: 'String',
	},
})

export default Image
