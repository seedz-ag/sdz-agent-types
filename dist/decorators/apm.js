"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APM = void 0;
const APM = (appd, prefix) => {
    return (targetClass, key, discriminator) => {
        const fn = discriminator.value;
        if (!targetClass.transactions) {
            targetClass.transactions = {};
        }
        if ("function" === typeof fn) {
            discriminator.value = (transaction) => {
                if (!appd) {
                    return;
                }
                if (targetClass.transactions[transaction]) {
                    targetClass.transactions[transaction].end();
                    return;
                }
                targetClass.transactions[transaction] = appd.startTransaction(`[${prefix} > ${transaction}]`);
                return;
            };
        }
        return discriminator;
    };
};
exports.APM = APM;
exports.default = exports.APM;
