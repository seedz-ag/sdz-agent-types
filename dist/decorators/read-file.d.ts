declare function Decorator<T extends {
    new (...args: any[]): {};
}>(constructor: any): {
    new (): {
        [x: string]: any;
        readFile(file: string): string | undefined;
    };
    [x: string]: any;
};
export default Decorator;
