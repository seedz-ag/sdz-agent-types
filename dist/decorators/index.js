"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFile = exports.APM = void 0;
const apm_1 = __importDefault(require("./apm"));
const read_file_1 = __importDefault(require("./read-file"));
exports.APM = apm_1.default;
exports.ReadFile = read_file_1.default;
exports.default = {
    APM: exports.APM,
    ReadFile: exports.ReadFile,
};
