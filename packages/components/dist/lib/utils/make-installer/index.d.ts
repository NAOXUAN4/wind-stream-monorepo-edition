import { App, Plugin } from 'vue';
export declare function withInstall<T>(component: T): T & Plugin;
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
    version: string;
};
