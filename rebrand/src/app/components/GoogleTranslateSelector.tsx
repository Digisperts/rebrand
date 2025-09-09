import { useState, useEffect, useRef } from "react";

export default function GoogleTranslateSelector() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleChange = (lang: string) => {
    if (!lang) return;
    document.cookie = `googtrans=/en/${lang};expires=${new Date(
      Date.now() + 31536000000
    ).toUTCString()};path=/;`;
    window.location.hash = `googtrans=/en/${lang}`;
    setTimeout(() => window.location.reload(), 200);
  };

  // When mouse enters container, clear timeout and open dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  // When mouse leaves container, close dropdown after a short delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // 150ms delay before closing dropdown
  };

  return (
    <div
      className={`relative inline-block ${
        scrolled ? "scrolled-class" : "top-class"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id="google_translate_element"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
      ></div>

      {isLoaded && (
        <>
          <button
            className="text-white px-3 py-2 rounded shadow-sm focus:outline-none"
            type="button"
          >
            🌐
          </button>
          {open && (
            <ul className="absolute mt-1 bg-white rounded shadow-lg text-gray-800 w-24">
              <li
                className="px-3 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => handleChange("en")}
              >
                🇺🇸 English
              </li>
              <li
                className="px-3 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => handleChange("es")}
              >
                🇪🇸 Español
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
