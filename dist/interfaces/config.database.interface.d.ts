import DatabaseDrivers from "../enums/database_drivers.enum";
export default interface ConfigDatabaseInterface {
    driver: DatabaseDrivers;
    host: string;
    locale?: string;
    schema?: string;
    password: string;
    port: number;
    server?: string;
    service?: string;
    username: string;
}
