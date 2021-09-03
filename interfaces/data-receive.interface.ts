import { EntityNames } from '../enums/data.enums'
export default interface DataReceives {
  protocol?: string
  entity: EntityNames
  content: unknown[]
  page?: number
  useRetroactiveScheduler?: boolean
}
