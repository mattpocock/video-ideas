declare global {
  var __DEV__: boolean;
  function isCool(): boolean;

  interface Window {
    wow: () => void;
  }

  namespace NodeJS {
    interface ProcessEnv {
      WOW: "COOL_STUFF";
    }
  }
}

process.env.WOW;

window.wow();

globalThis.__DEV__ = true;
globalThis.isCool = () => true;

export {};
