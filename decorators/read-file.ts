import { readFileSync } from "fs";

const ReadFile = (targetClass, targetKey, descriptor): any => {
  const fn = descriptor.value;
  if (typeof fn === "function") {
    descriptor.value = (file: string): string | undefined => {
      let text;
      try {
        const buffer = readFileSync(file);
        text = buffer.toString();
      } catch {}
      return text;
    };
  }
  return descriptor;
};

export default ReadFile;
