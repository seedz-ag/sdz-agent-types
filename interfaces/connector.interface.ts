import Client from "./client.interface";
import Invoice from "./invoice.interface";

export default interface Connector {
  connect(): void
  execute(query?: string): Promise<Client[] | Invoice[]>
}
