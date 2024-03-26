import DatabaseRow from "./database-row.interface";
export default interface Connector {
    connect(): void;
    execute(query: string): Promise<DatabaseRow[]>;
    getVersion(): string;
}
