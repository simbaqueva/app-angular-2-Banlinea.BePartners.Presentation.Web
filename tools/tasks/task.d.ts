export declare abstract class Task {
    shallRun(files: string[]): boolean;
    abstract run(done?: any, files?: string[]): any | Promise<any> | void;
}
