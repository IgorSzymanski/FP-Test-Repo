import { ValuesOf } from '~library/helpers'
import { ID } from '~/value-objects/id'

export const VersionIds = [ID('red'), ID('blue')]

export type VersionId = ValuesOf<typeof VersionIds>
