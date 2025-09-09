"use client";
import { useEffect, useState } from "react";

export default function GoogleTranslateSelector() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google?.translate?.TranslateElement) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es",
            layout: (window as any).google.translate.TranslateElement
              .InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    if (!lang) return;

    document.cookie = `googtrans=/en/${lang};expires=${new Date(
      Date.now() + 31536000000
    ).toUTCString()};path=/;`;
    window.location.hash = `googtrans=/en/${lang}`;
    setTimeout(() => window.location.reload(), 200);
  };

  return (
    <div className="relative inline-block">
      <div
        id="google_translate_element"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
      ></div>
      {isLoaded && (
        <select
          onChange={handleChange}
          className="bg-white border border-gray-300 text-gray-800 px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">🌐 Language</option>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      )}
    </div>
  );
}
