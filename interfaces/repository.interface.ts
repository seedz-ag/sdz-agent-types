import DatabaseRow from "./database-row.interface";
import PaginationInterface from "./pagination.interface";

export default interface Repository {
  getClients(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countClient(
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
  getProperty(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countProperty(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItem(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItem(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItemBranding(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemBranding(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getItemGroup(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemGroup(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getRequest(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countRequest(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getRequestItem(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countRequestItem(
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
  getPaymentType(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countPaymentType(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getProvider(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countProvider(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getAccountPay(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countAccountPay(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getAccountReceivable(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countReceivable(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getVendor(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countVendor(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getEmployee(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countEmployee(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getInventory(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countInventory(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  getTest(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countTest(
    pagination?: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
}
