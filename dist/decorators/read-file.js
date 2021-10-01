"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
            return fn(text);
        };
    }
    return discriminator;
};
exports.ReadFile = ReadFile;
class ReadFileInterface {
    readFile(file) {
        return file;
    }
}
__decorate([
    exports.ReadFile,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ReadFileInterface.prototype, "readFile", null);
function Decorator(constructor) {
    return class extends constructor {
    };
}
exports.default = Decorator;
