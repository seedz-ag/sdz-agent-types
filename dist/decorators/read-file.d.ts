export declare const ReadFile: (targetClass: any, key: string, discriminator: any) => any;
declare function Decorator(): <T extends new (...args: any[]) => {}>(constructor: any) => {
    new (): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Decorator;
