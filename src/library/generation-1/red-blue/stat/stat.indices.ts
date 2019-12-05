import { ValuesOf } from '../../../helpers'
import { ID } from '../../../../value-objects/id'

export const StatIds = [ID('hp'), ID('attack'), ID('defense'), ID('special'), ID('speed')]

export type StatId = ValuesOf<typeof StatIds>
