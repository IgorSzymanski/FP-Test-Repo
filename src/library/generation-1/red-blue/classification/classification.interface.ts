import { INamedResource } from '~/library/interfaces/named-resource.interface'
import { ClassificationId } from './classification.indices'

export type IClassification<I extends ClassificationId = ClassificationId> = INamedResource<I>
