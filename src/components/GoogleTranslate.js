"use client";

import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.google?.translate) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,ne,hi,ja,ko,zh-CN,zh-TW,fr,de,es,it,pt,ru,ar,tr,th,vi,id,ms",
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
    <div className="fixed bottom-24 right-6 z-[9999]">
      <div className="relative flex flex-col items-end">
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            px-6 py-3
            rounded-full
            font-semibold
            text-white
            bg-gradient-to-r from-red-500 to-red-700
            hover:from-red-600 hover:to-red-800
            shadow-lg
            hover:shadow-xl
            hover:scale-105
            transition-all
          "
        >
          Translate
        </button>

        <div
          className={`
            absolute
            bottom-full
            mb-3
            right-0
            transition-all
            duration-300
            origin-bottom-right
            ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div id="google_translate_element" className="min-w-[180px]" />
        </div>
      </div>
    </div>
  );
}