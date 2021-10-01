import { readFileSync } from "fs";

export const ReadFile = (
  targetClass: any,
  key: string,
  discriminator: any
): any => {
  const fn = discriminator.value;
  if ("function" === typeof fn) {
    discriminator.value = (file: string): string | undefined => {
      let text;
      try {
        const buffer = readFileSync(file);
        text = buffer.toString();
      } catch {}
      return fn(text);
    };
  }
  return discriminator;
};

class ReadFileInterface {
  @ReadFile
  readFile(file: string): string {
    return file;
  }
}
function Decorator<T extends { new (...args: any[]): {} }>(constructor: any) {
  return class extends constructor implements ReadFileInterface {};
}

export default Decorator;
