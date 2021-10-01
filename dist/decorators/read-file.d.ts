declare const Decorator: (constructor: any) => {
    new (): {
        [x: string]: any;
        readFile(file: string): string | undefined;
    };
    [x: string]: any;
};
export default Decorator;
