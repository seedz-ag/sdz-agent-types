import Connector from "./connector.interface";
declare class AbstractRepository {
    private connector;
    constructor(connector: Connector);
    private getPlaceholder;
    buildQuery(query: string): string;
    count(query: string): Promise<number>;
    execute(query: string, page?: number, limit?: number): Promise<any>;
    getConnector(): Connector;
    loadFile(file: string): string;
    query(query: string, page?: number, limit?: number): any;
    setConnector(connector: Connector): this;
}
export default AbstractRepository;
