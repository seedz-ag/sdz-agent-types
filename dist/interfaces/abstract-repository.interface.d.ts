import Connector from "./connector.interface";
declare class AbstractRepository {
    private connector;
    constructor(connector: Connector);
    count(entity: string): any;
    execute(query: string, skip?: number, limit?: number): any;
    loadFile(file: string): string;
    query(entity: string, skip?: number, limit?: number): any;
    setConnector(connector: Connector): this;
}
export default AbstractRepository;
