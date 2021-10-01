import Connector from './connector.interface';
import Repository from './repository.interface';
export default interface DatabasePackage {
    Connector: Connector;
    Repository: Repository;
}
