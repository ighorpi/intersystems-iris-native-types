export = native;
declare namespace native {
    export { connectionInfo };
    export type { ConnectionInfo };
    export type { Connection };
    export type { Iris };
    export type { lockType };
    export type { lockMode };
    export type { Iterator };
}
type ConnectionInfo = {
    /**
     * - the host address
     */
    host: string;
    /**
     * - the port number
     */
    port: number;
    /**
     * - the IRIS Namespace
     */
    ns: string;
    /**
     * - user name
     */
    user: string;
    /**
     * - password
     */
    pwd: string;
    /**
     * - use shared memory if available, default is true
     */
    sharedmemory: boolean;
};

declare function connectionInfo({}: ConnectionInfo) : Connection

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
