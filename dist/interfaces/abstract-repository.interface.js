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
                console.log(target, propKey);
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
    count(entity) {
        return this.execute(`SELECT count (*) as total from (${this.loadFile(entity)})`);
    }
    execute(query, skip, limit) {
        const statement = [
            query,
            skip ? `SKIP ${skip}` : null,
            limit ? `LIMIT ${limit}` : null,
        ]
            .filter((item) => !!item)
            .join(" ");
        return this.connector.execute(statement);
    }
    loadFile(file) {
        return fs_1.default
            .readFileSync(`${process.cwd()}/config/sql/${file}.sql`)
            .toString();
    }
    query(entity, skip, limit) {
        return this.execute(this.loadFile(entity), skip, limit);
    }
    setConnector(connector) {
        this.connector = connector;
        return this;
    }
}
exports.default = AbstractRepository;
