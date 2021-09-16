import DatabaseRow from "./database-row.interface";
import PaginationInterface from "./pagination.interface";

export default interface Repository {
  getClients(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countClient(type: string): Promise<DatabaseRow[]>;
  getAddress(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countAddress(type?: string): Promise<DatabaseRow[]>;
  getProperty(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countProperty(type?: string): Promise<DatabaseRow[]>;
  getItem(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItem(type?: string): Promise<DatabaseRow[]>;
  getItemBranding(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemBranding(type?: string): Promise<DatabaseRow[]>;
  getItemGroup(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countItemGroup(type?: string): Promise<DatabaseRow[]>;
  getRequest(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countRequest(type: string): Promise<DatabaseRow[]>;
  getRequestItem(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countRequestItem(type?: string): Promise<DatabaseRow[]>;
  getInvoices(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countInvoices(type?: string): Promise<DatabaseRow[]>;
  getInvoicesItem(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countInvoicesItem(type: string): Promise<DatabaseRow[]>;
  getPaymentType(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countPaymentType(type?: string): Promise<DatabaseRow[]>;
  getProvider(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countProvider(type?: string): Promise<DatabaseRow[]>;
  getAccountPay(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countAccountPay(type: string): Promise<DatabaseRow[]>;
  getAccountReceivable(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countReceivable(type: string): Promise<DatabaseRow[]>;
  getVendor(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countVendor(type?: string): Promise<DatabaseRow[]>;
  getEmployee(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countEmployee(type?: string): Promise<DatabaseRow[]>;
  getInventory(
    pagination: PaginationInterface,
    type: string
  ): Promise<DatabaseRow[]>;
  countInventory(type?: string): Promise<DatabaseRow[]>;
  getTest(
    pagination: PaginationInterface,
    type?: string
  ): Promise<DatabaseRow[]>;
  countTest(type?: string): Promise<DatabaseRow[]>;
}
