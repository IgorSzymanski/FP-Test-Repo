import { VersionId } from './version.indices'
import { IBaseVersion } from '~/library/version/version.interface'

export type IVersion<I extends VersionId = VersionId> = IBaseVersion<I>
