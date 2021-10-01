"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Decorator = (targetClass, targetKey, descriptor) => {
    const fn = descriptor.value;
    if (typeof fn === "function") {
        descriptor.value = (file) => {
            let text;
            try {
                const buffer = fs_1.readFileSync(file);
                text = buffer.toString();
            }
            catch { }
            return text;
        };
    }
    return descriptor;
};
exports.default = Decorator;
