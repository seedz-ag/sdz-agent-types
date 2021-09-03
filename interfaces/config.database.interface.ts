import DatabaseDrivers from '../enums/database_drivers.enum'
export default interface ConfigDatabaseInterface {
  collation: string
  driver: DatabaseDrivers
  password: string
  port: number
  server: string
  username: string
  host: string
}
