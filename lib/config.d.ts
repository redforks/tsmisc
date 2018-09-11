import { DeepPartial } from 'funts';
export interface AppConfig {
    title: string;
    codeName: string;
}
export interface Config {
    app: AppConfig;
}
export interface SettableConfig {
    app: Partial<AppConfig>;
}
export declare function setConfig<K extends keyof Config>(cfg: Readonly<Pick<DeepPartial<Config>, K>>): void;
export declare function getConfig(): Config;
