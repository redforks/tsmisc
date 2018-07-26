import { DeepPartial } from 'funts';
import { merge } from 'lodash';

export interface AppConfig {
  title: string;
  codeName: string;
}

// Contains all spork lib configurable options.
export interface Config {
  app: AppConfig;
}

const defaultConfig: Readonly<Config> = {
  app: {
    title: 'title not set',
    codeName: 'codeName not set',
  },
};

let option: Config = defaultConfig;

export interface SettableConfig {
  app: Partial<AppConfig>;
}

export function setConfig<K extends keyof Config>(cfg: Pick<DeepPartial<Config>, K>) {
  option = merge(option, cfg as any);
}

export function config(): Config {
  return option;
}
