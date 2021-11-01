"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
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
                //console.log(target, propKey);
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
    async count(entity) {
        const resultSet = await this.execute(`SELECT COUNT (*) as total FROM (${this.loadFile(entity)})`);
        const obj = {};
        Object.keys(resultSet).map((key) => obj[key.toLowerCase()] = resultSet[key]);
        return obj.total;
    }
    async execute(query, page, limit) {
        const statement = [
            query,
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
        return fs_1.default
            .readFileSync(`${process.cwd()}/config/sql/${file.toLocaleLowerCase()}.sql`)
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
