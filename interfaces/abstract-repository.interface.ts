import fs from "fs";
import Connector from "./connector.interface";
class AbstractRepository {
  private connector: Connector;
  constructor(connector: Connector) {
    if (new.target === AbstractRepository) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.setConnector(connector);
    return new Proxy(this, {
      get(target: any, propKey: string): any {
        const property = target[propKey];
        if (target[propKey]) {
          return target[propKey];
        }
        //console.log(target, propKey);
        const entity = propKey.replace(/^(count|get|set)/, "");
        if (propKey.match(/^count/)) {
          return () => target.count(entity);
        }
        if (propKey.match(/^get/)) {
          return (...args: any[]) =>
            target.query.apply(target, [entity, ...args]);
        }
        if (propKey.match(/^set/)) {
          return (arg: any) => {
            target[entity] = arg;
            return target;
          };
        }
      },
      set: (object: any, key: string, value: any, proxy: any) => {
        object[key] = value;
        return true;
      },
    });
  }

  count(entity: string): any {
    return this.execute(
      `SELECT count (*) as total from (${this.loadFile(entity)})`
    );
  }

  execute(query: string, page?: number, limit?: number): any {
    const statement = [
      query,
      page && limit ? `SKIP ${page * limit}` : null,
      limit ? `LIMIT ${limit}` : null,
    ]
      .filter((item) => !!item)
      .join(" ");

    return this.connector.execute(statement);
  }

  getConnector():Connector {
    return this.connector;
  }
  
  loadFile(file: string): string {
    return fs
      .readFileSync(
        `${process.cwd()}/config/sql/${file.toLocaleLowerCase()}.sql`
      )
      .toString();
  }

  query(entity: string, page?: number, limit?: number): any {
    return this.execute(this.loadFile(entity), page, limit);
  }

  setConnector(connector: Connector): this {
    this.connector = connector;
    return this;
  }
}

export default AbstractRepository;
