export const APM = (appd: any, prefix: any) => {
  return (targetClass: any, key: any, discriminator: any) => {
    const fn = discriminator.value;
    if (!targetClass.transactions) {
      targetClass.transactions = {};
    }
    if ("function" === typeof fn) {
        discriminator.value = (transaction: string) => {
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

export default APM;
