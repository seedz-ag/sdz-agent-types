import Connector from "./connector.interface";
declare class AbstractRepository {
    private connector;
    constructor(connector: Connector);
    count(entity: string): any;
    execute(query: string, page?: number, limit?: number): any;
    getConnector(): Connector;
    loadFile(file: string): string;
    query(entity: string, page?: number, limit?: number): any;
    setConnector(connector: Connector): this;
}
export default AbstractRepository;
