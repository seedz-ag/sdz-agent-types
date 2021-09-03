import Client from './client.interface'
import Connector from './connector.interface'
import Invoice from './invoice.interface'
import PaginationInterface from './pagination.interface'

export default interface Repository {
  getClients(pagination: PaginationInterface): Promise<Client[] | void>
  getInvoices(pagination: PaginationInterface): Promise<Invoice[] | void>
}
