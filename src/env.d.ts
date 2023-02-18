interface ImportMetaEnv {
  readonly PUBLIC_CHATGPT_API_KEY: string;
  readonly OPENAI_MODEL: string;
  readonly MAX_TOKENS: number;
  readonly TEMPERATURE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
