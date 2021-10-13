import ConfigAuthAPI from "./config.auth.api.type";
import ConfigDatabase from "../interfaces/config.database.interface";
import ConfigSchedule from "./config.schedule.type";
import ConfigScope from "./config.scope.type";
import { ERPs } from "../enums/erps.enum";
import ConfigAuthFTP from "./config.auth.ftp.type";

export type { default as ConfigAuthAPI } from "./config.auth.api.type";
export type { default as ConfigAuthFTP } from "./config.auth.ftp.type";
export type { default as ConfigSchedule } from "./config.schedule.type";
export type { default as ConfigScope } from "./config.scope.type";

type Config = {
  api: ConfigAuthAPI;
  async: boolean;
  connector: string;
  database: ConfigDatabase;
  debug: boolean;
  erp: ERPs,
  ftp: ConfigAuthFTP;
  legacy: boolean;
  pageSize: number;
  schedule: ConfigSchedule;
  scope: ConfigScope;
};

export default Config;
