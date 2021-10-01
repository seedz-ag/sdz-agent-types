const { readFileSync } = require("fs");

const ReadFile = (targetClass, targetKey, descriptor) => {
  const fn = descriptor.value;
  if (typeof fn === "function") {
    descriptor.value = (file) => {
      const buffer = readFileSync(file);
      return buffer.toString();
    };
  }
  return descriptor;
};

module.exports = ReadFile;
