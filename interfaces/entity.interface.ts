import HydratorMapping from "./hydrator-mapping.interface";

export default interface Entity {
  dto: HydratorMapping;
  file: string;
  name: string;
}
