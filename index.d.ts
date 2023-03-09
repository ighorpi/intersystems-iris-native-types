export = native;
declare namespace native {
    export { connectionInfo };
    export type { Connection };
    export type { Iris };
    export type { lockType };
    export type { lockMode };
    export type { Iterator };
}

declare function connectionInfo(host?: string,
    port?: number,
    ns?: string,
    user?: string,
    pwd?: string,
    sharedmemory?: boolean): Connection

declare enum lockType {
    'S', 'E'
}
declare enum lockMode {
    'S', 'E', 'I'
}
declare class Iris {
    get(globalName: string, ...subscript: string[] | number[]): any;
    getBoolean(globalName: string, ...subscript: string[] | number[]): boolean;
    getBytes(globalName: string, ...subscript: string[] | number[]): ArrayBuffer;
    getAPIVersion(): string;
    getNumber(globalName: string, ...subscript: string[] | number[]): number;
    getServerVersion(): string;
    getString(globalName: string, ...subscript: string[] | number[]): string;
    set(value: string | number | true | false | null, globalName: string, ...subscript: string[] | number[]): void;
    classMethodValue(className: string, methodName: string, ...argument: any[]): any;
    classMethodVoid(className: string, methodName: string, ...argument: any[]): void;
    function(routineName: string, functionName: string, ...argument: any[]): any;
    procedure(routineName: string, procedureName: string, ...argument: any[]): any;
    increment(incrementBy: number, globalName: string, ...subscript: string[]): number;
    isDefined(globalName: string, ...subscript: string[] | number[]): number;
    kill(globalName: string, ...subscript: string[] | number[]): void;
    lock(lockType: lockType, timeout: number, lockReference: string, ...subscript: string[] | number[]): boolean;
    unlock(lockMode: lockMode, timeout: number, lockReference: string, ...subscript: string[] | number[]): boolean;
    releaseAllLocks(): void;
    tStart(): void
    tCommit(): void;
    tRollback(): void;
    tRollbackOne(): void;
    getTLevel(): number;
    iterator(globalName: string, ...subscript: string[] | number[]): any;
}
declare class Iterator {
    next(): any;
    startFrom(subscript: string): Iterator;
    reversed(): Iterator;
    entries(): Iterator;
    keys(): Iterator;
    values(): Iterator;
}
declare class Connection {
    createIris(): Iris
    close(): Iris
}
