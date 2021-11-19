export const APM = (name: any): ClassDecorator => {
  return (target: any) => {
    target.apm = (transaction: string) => {
      if (!target.appd) {
        return;
      }

      if (target.transactions[transaction]) {
        target.transactions[transaction].end();
        return;
      }

      target.transactions[transaction] = target.appd.startTransaction(
        `[${name} > ${transaction}]`
      );
    };
  }
};

export default APM;
