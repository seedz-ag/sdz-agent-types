"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
const yargs_1 = __importDefault(require("yargs"));
class AbstractRepository {
    constructor(connector) {
        if (new.target === AbstractRepository) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this.setConnector(connector);
        return new Proxy(this, {
            get(target, propKey) {
                const property = target[propKey];
                if (target[propKey]) {
                    return target[propKey];
                }
                const entity = propKey.replace(/^(count|get|set)/, "");
                if (propKey.match(/^count/)) {
                    return () => target.count(entity);
                }
                if (propKey.match(/^get/)) {
                    return (...args) => target.query.apply(target, [entity, ...args]);
                }
                if (propKey.match(/^set/)) {
                    return (arg) => {
                        target[entity] = arg;
                        return target;
                    };
                }
            },
            set: (object, key, value, proxy) => {
                object[key] = value;
                return true;
            },
        });
    }
    getPlaceholder(query, preg) {
        const exec = query.match(preg);
        return exec || '';
    }
    buildQuery(query) {
        const argv = (0, yargs_1.default)(process.argv).argv;
        const replaces = [];
        let newQuery = query;
        for (const replace of this.getPlaceholder(query, /(AND \(.*?{START_DATE}\))/g)) {
            replaces.push([
                replace,
                argv.sqlDays ? replace.replace('{START_DATE}', `'${`${(0, moment_1.default)().subtract(argv.sqlDays, 'days').format('YYYY-MM-DD')} 00:00:00`}'`) : ''
            ]);
        }
        for (const option of replaces) {
            newQuery = newQuery.replace(option[0], option[1]);
        }
        return newQuery;
    }
    async count(entity) {
        const resultSet = await this.execute(`SELECT COUNT (*) as total FROM (${this.buildQuery(this.loadFile(entity))})`);
        const obj = {};
        Object.keys(resultSet).map((key) => obj[key.toLowerCase()] = resultSet[key]);
        return obj[0].total;
    }
    async execute(query, page, limit) {
        const statement = [
            this.buildQuery(query),
            page && limit ? `SKIP ${page * limit}` : null,
            limit ? `LIMIT ${limit}` : null,
        ]
            .filter((item) => !!item)
            .join(" ");
        return this.connector.execute(statement);
    }
    getConnector() {
        return this.connector;
    }
    loadFile(file) {
        const dir = process.env.CONFIGDIR || `${process.cwd()}/config`;
        return fs_1.default
            .readFileSync(`${dir}/sql/${file.toLocaleLowerCase()}.sql`)
            .toString();
    }
    query(entity, page, limit) {
        return this.execute(this.loadFile(entity), page, limit);
    }
    setConnector(connector) {
        this.connector = connector;
        return this;
    }
}
exports.default = AbstractRepository;
