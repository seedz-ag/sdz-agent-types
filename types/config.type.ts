import ConfigAuth from "./config.auth.type";
import ConfigHttp from "./config.http.type";
import ConfigDatabase from "../interfaces/config.database.interface";
import ConfigSchedule from "./config.schedule.type";
import ConfigScope from "./config.scope.type";
import ConfigFTP from "./config.ftp.type";
import { ERPs } from "../enums/erps.enum";

export type { default as ConfigAuth } from "./config.auth.type";
export type { default as ConfigFTP } from "./config.ftp.type";
export type { default as ConfigDatabase } from "../interfaces/config.database.interface";
export type { default as ConfigSchedule } from "./config.schedule.type";
export type { default as ConfigScope } from "./config.scope.type";

type Config = {
  async: boolean,
  auth: ConfigAuth;
  connector: string;
  database: ConfigDatabase;
  debug: boolean;
  erp: ERPs,
  http: ConfigHttp;
  ftp: ConfigFTP;
  legacy: boolean;
  pageSize: number;
  schedule: ConfigSchedule;
  scope: ConfigScope;
};

export default Config;
