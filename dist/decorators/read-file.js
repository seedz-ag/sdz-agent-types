"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Decorator = (constructor) => {
    return class extends constructor {
        readFile(file) {
            let text;
            try {
                const buffer = fs_1.readFileSync(file);
                text = buffer.toString();
            }
            catch { }
            return text;
        }
    };
};
exports.default = Decorator;
