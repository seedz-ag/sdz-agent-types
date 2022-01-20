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
      return fn.apply(discriminator, [text]);
    };
  }
  return discriminator;
};

export default ReadFile;
