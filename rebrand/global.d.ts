// global.d.ts
interface Window {
  google?: {
    translate?: {
      TranslateElement: any;
      InlineLayout: any;
    };
  };
  googleTranslateElementInit?: () => void;
}
