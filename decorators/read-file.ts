import { readFileSync } from "fs";
import { HydratorMapping } from "..";

const ReadFile = (targetClass, targetKey, descriptor): any => {
  const fn = descriptor.value;
  if (typeof fn === "function") {
    descriptor.value = (file: string) => {
      const buffer = readFileSync(file);
      return JSON.parse(buffer.toString());
    };
  }
  return descriptor;
};

export default ReadFile;
