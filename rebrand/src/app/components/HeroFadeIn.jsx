import { useEffect, useState } from "react";

export default function HeroFadeIn({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add a 1 second delay before fading in
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        transition-all duration-700 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        will-change-transform
      `}
    >
      {children}
    </div>
  );
} 