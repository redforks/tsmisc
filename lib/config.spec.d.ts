declare module './config' {
    interface TestConfig {
        foo: {
            bar: string;
            misc: string;
        };
        Counts: number;
    }
    interface Config {
        test?: TestConfig;
    }
}
export {};
