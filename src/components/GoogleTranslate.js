"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (window.google?.translate) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ne,ja,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
  <div
    className="
      fixed bottom-24 right-4
      z-[9999]
      group
    "
  >
    <div
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-white
        border border-gray-200
        shadow-lg
        hover:shadow-xl
        transition-all
      "
    >
      {/* Globe Icon */}
      <span className="text-lg">🌐</span>

      {/* Google Translate Mount */}
      <div
        id="google_translate_element"
        className="min-w-[120px]"
      />
    </div>
  </div>
);

}
