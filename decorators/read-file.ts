import { readFileSync } from "fs";
const Decorator = (): any => (arg: any) =>
  (arg.readFile = (file: string): string | undefined => {
    let text;
    try {
      const buffer = readFileSync(file);
      text = buffer.toString();
    } catch {}
    return text;
  });

export default Decorator;
