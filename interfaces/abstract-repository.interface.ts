import fs from "fs";
import moment from "moment";
import yargs from "yargs";

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

  private getPlaceholder(query:string, preg: RegExp): string[] | string {
    const exec = query.match(preg);
    return exec || '';
  }

  buildQuery(query: string) {
    const argv: {[key: string]: any} = yargs(process.argv).argv;
    const replaces = [];

    let newQuery = query;

    for (const replace of this.getPlaceholder(query, /(AND \(.*?{START_DATE}\))/g)) {
      replaces.push([
        replace,
        argv.sqlDays ? replace.replace('{START_DATE}', `'${`${moment().subtract(argv.sqlDays, 'days').format('YYYY-MM-DD')} 00:00:00`}'`) : ''
      ]);
    }

    for (const option of replaces) {
      newQuery = newQuery.replace(option[0], option[1]);
    }

    return newQuery;
  }

  async count(entity: string): Promise<number> {
    const resultSet = await this.execute(`SELECT COUNT (*) as total FROM (${this.loadFile(entity)})`);
    const obj:any = {}
    Object.keys(resultSet).map((key) =>  obj[key.toLowerCase()] = resultSet[key])
    return obj[0].total;
  }

  async execute(query: string, page?: number, limit?: number): Promise<any> {
    const statement = [
      this.buildQuery(query),
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
    const dir  = process.env.CONFIGDIR || `${process.cwd()}/config`;
    return fs
      .readFileSync(
        `${dir}/sql/${file.toLocaleLowerCase()}.sql`
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
