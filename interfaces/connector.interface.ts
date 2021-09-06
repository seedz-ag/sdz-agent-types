import Client from "./client.interface";
import Invoice from "./invoice.interface";
import PaginationInterface from "./pagination.interface";

export default interface Connector {
  connect(): void;
  execute(
    query?: string,
    pagination?: PaginationInterface
  ): Promise<Client[] | Invoice[]>;
}
