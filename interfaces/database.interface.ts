import ConfigDatabaseInterface from "./config.database.interface"
export interface Database {
	connect(config: ConfigDatabaseInterface): () => {},
	getClients: () => {},
	getInvoices: () => {},
}