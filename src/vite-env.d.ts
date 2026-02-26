/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASENAME?: string;
  readonly VITE_GA_ID?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
