declare global {
    // @ts-ignore
    export type unknown = any;
}

/**
 * This is a tiny demo function that returns `unknown`. You're actual module
 * could include a lot more functionality.
 */
export default (): unknown => {
    return {} as unknown;
};
