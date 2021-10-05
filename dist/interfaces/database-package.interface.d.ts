import Connector from "./connector.interface";
import AbstractRepository from "./abstract-repository.interface";
export default interface DatabasePackage {
    Connector: Connector;
    Repository: AbstractRepository;
}
