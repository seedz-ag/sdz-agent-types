"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APM = void 0;
const APM = (targetClass, key, discriminator) => {
    targetClass.apm = (transaction) => {
        if (!targetClass.appd) {
            return;
        }
        if (targetClass.transactions[transaction]) {
            targetClass.transactions[transaction].end();
            return;
        }
        targetClass.transactions[transaction] = targetClass.appd.startTransaction(`[${targetClass} > ${transaction}]`);
    };
};
exports.APM = APM;
exports.default = exports.APM;
