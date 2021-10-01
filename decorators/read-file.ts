const { readFileSync } = require("fs");

const ReadFile = (targetClass, targetKey, descriptor) => {
  const fn = descriptor.value;
  if (typeof fn === "function") {
    descriptor.value = (file: string): string => {
      const buffer = readFileSync(file);
      return JSON.parse(buffer.toString());
    };
  }
  return descriptor;
};

export default ReadFile;
