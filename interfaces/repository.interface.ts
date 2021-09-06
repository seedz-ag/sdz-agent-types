import DatabaseRow from './database-row.interface'
import PaginationInterface from './pagination.interface'

export default interface Repository {
  getClients(pagination: PaginationInterface): Promise<DatabaseRow[]>
  getInvoices(pagination: PaginationInterface): Promise<DatabaseRow[]>
}
