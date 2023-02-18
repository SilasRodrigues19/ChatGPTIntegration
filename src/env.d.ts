interface ImportMetaEnv {
  readonly PUBLIC_CHATGPT_API_KEY: string;
  readonly PUBLIC_OPENAI_MODEL: string;
  readonly PUBLIC_MAX_TOKENS: number;
  readonly PUBLIC_TEMPERATURE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
