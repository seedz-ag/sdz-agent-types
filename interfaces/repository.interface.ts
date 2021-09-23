import DatabaseRow from "./database-row.interface";
import PaginationInterface from "./pagination.interface";

export default interface Repository {
  getClients(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countClients(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getAddress(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countAddress(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getProperties(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countProperties(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItems(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItems(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItemsBranding(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemsBranding(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItemsGroup(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemsGroup(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getOrders(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countOrders(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getOrdersItem(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countOrdersItem(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getInvoices(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countInvoices(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getInvoicesItem(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countInvoicesItem(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getPaymentsType(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countPaymentsType(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getProviders(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countProviders(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getAccountsPay(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countAccountsPay(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getAccountsReceivable(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countAccountsReceivable(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getVendors(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countVendors(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getEmployees(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countEmployees(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getInventories(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countInventories(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getTests(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countTests(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
}
