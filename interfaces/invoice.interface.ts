import APIEntity from "./api-entity.interface";

export default interface Invoice extends APIEntity {
  clientEin: string
  value: number
}
