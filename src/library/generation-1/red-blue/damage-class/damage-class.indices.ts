import { ValuesOf } from '~library/helpers'
import { ID } from '~/value-objects/id'

export const DamageClassIds = [ID('special'), ID('physical'), ID('status')]

export type DamageClassId = ValuesOf<typeof DamageClassIds>
