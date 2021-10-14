"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorators = exports.AbstractRepository = void 0;
const decorators_1 = __importDefault(require("./decorators"));
exports.Decorators = decorators_1.default;
const abstract_repository_interface_1 = __importDefault(require("./interfaces/abstract-repository.interface"));
exports.AbstractRepository = abstract_repository_interface_1.default;
