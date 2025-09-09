export {};

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: any;
          },
          containerId: string
        ) => void;
        InlineLayout?: any;
      };
    };

    googleTranslateElementInit?: () => void;
  }
}
