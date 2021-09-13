import DatabaseRow from "./database-row.interface";
import PaginationInterface from "./pagination.interface";

export default interface Repository {
  getClients(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getAddress(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getProperty(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getItem(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getItemBranding(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getItemGroup(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getRequest(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getRequestItem(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getInvoices(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getBilling(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getPaymentType(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getProvider(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getAccountPay(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getAccountReceivable(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getVendor(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getEmployee(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getInventory(pagination: PaginationInterface): Promise<DatabaseRow[]>;
  getTest(pagination: PaginationInterface): Promise<DatabaseRow[]>;
}
