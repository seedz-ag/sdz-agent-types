import { readFileSync } from "fs";
const Decorator = () => (constructor: any): any => {
  return class extends constructor {
    readFile(file: string): string | undefined {
      let text;
      try {
        const buffer = readFileSync(file);
        text = buffer.toString();
      } catch {}
      return text;
    }
  }
};

export default Decorator;
