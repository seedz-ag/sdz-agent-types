export const APM = (targetClass: any, key: string, discriminator: any): any => {
  targetClass.apm = (transaction: string) => {
    if (!targetClass.appd) {
      return;
    }

    if (targetClass.transactions[transaction]) {
      targetClass.transactions[transaction].end();
      return;
    }

    targetClass.transactions[transaction] = targetClass.appd.startTransaction(
      `[${targetClass} > ${transaction}]`
    );
  };
};

export default APM;
