import type { App, Plugin } from 'vue';

export function withInstall<T>(component: T) {
  (component as T & Plugin).install = (app: App) => {
    const name = (component as unknown as { name: string }).name;
    if (name) {
      app.component(name, component as unknown as { name: string });
    }
  };
  return component as T & Plugin;
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return {
    install,
    version: '0.0.1' 
  };
};