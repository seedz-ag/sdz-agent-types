"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFile = void 0;
const fs_1 = require("fs");
const ReadFile = (targetClass, key, discriminator) => {
    const fn = discriminator.value;
    if ("function" === typeof fn) {
        discriminator.value = (file) => {
            let text;
            try {
                const buffer = fs_1.readFileSync(file);
                text = buffer.toString();
            }
            catch { }
            return fn.apply(discriminator, [text]);
        };
    }
    return discriminator;
};
exports.ReadFile = ReadFile;
exports.default = exports.ReadFile;
