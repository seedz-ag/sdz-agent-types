import DatabaseRow from "./database-row.interface";
import PaginationInterface from "./pagination.interface";

export default interface Connector {
  connect(): void;
  execute(
    query?: string,
    pagination?: PaginationInterface
  ): Promise<DatabaseRow[]>;
}
