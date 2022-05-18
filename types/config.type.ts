
import ConfigAuthFTP from "./config.auth.ftp.type";
import ConfigDatabase from "../interfaces/config.database.interface";
import ConfigSchedule from "./config.schedule.type";
import ConfigScope from "./config.scope.type";

import ERPs  from "../enums/erps.enum";
import HydratorMapping from "../interfaces/hydrator-mapping.interface";
import Sql from "../interfaces/sql.interface";


export type { default as ConfigAuthAPI } from "./config.auth.api.type";
export type { default as ConfigAuthFTP } from "./config.auth.ftp.type";
export type { default as ConfigDatabase } from "../interfaces/config.database.interface";
export type { default as ConfigSchedule } from "./config.schedule.type";
export type { default as ConfigScope } from "./config.scope.type";
export type { default as HydratorMapping } from "../interfaces/hydrator-mapping.interface";
export type { default as Sql } from  "../interfaces/sql.interface";

type Config = {
  apiUrl: string;
  connector: string;
  database: ConfigDatabase;
  debug: boolean;
  dtos?: HydratorMapping;
  erp: ERPs,
  fileSize: number;
  ftp: ConfigAuthFTP;
  http?: any;
  legacy: boolean;
  mongoUrl?: string;
  issuerUrl?: string;
  name?: string;
  pageSize: number;
  schedule: ConfigSchedule;
  scope: ConfigScope;
  sqls?: Sql;
};




export default Config;
