import AbstractRepository from "./abstract-repository.interface";
import ConfigDatabaseInterface from "./config.database.interface";

export interface Database {
  connect(config: ConfigDatabaseInterface): void;
  getRepository(): AbstractRepository;
}
