import ConfigAuth from "./config.auth.type";
import ConfigHttp from "./config.http.type";
import ConfigDatabase from "../interfaces/config.database.interface";
import ConfigSchedule from "./config.schedule.type";

export type { default as ConfigAuth } from "./config.auth.type";
export type { default as ConfigFTP } from "./config.ftp.type";
export type { default as ConfigDatabase } from "../interfaces/config.database.interface";

type Config = {
  auth: ConfigAuth;
  database: ConfigDatabase;
  http: ConfigHttp;
  schedule: ConfigSchedule;
};
export default Config;
