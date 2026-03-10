"use client";

import { useEffect, useState } from "react";

const languages = [
  { label: "English", value: "en" },
  { label: "Nepali", value: "ne" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese (Simplified)", value: "zh-CN" },
  { label: "Chinese (Traditional)", value: "zh-TW" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Italian", value: "it" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Arabic", value: "ar" },
  { label: "Turkish", value: "tr" },
  { label: "Thai", value: "th" },
  { label: "Vietnamese", value: "vi" },
  { label: "Indonesian", value: "id" },
  { label: "Malay", value: "ms" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  useEffect(() => {
    if (window.google && window.google.translate) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map((l) => l.value).join(","),
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

  // const changeLanguage = (lang) => {
  //   const select = document.querySelector(".goog-te-combo");
  //   if (!select) return;

  //   select.value = lang;
  //   select.dispatchEvent(new Event("change"));

  //   setSelected(lang);
  //   setOpen(false);
  // };
const changeLanguage = (lang) => {
  const select = document.querySelector(".goog-te-combo");
  if (!select) return;

  if (lang === "en") {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" +
      window.location.hostname;

    setSelected("en");
    setOpen(false);
    window.location.reload();
    return;
  }

  // if same language is selected again after coming back from English,
  // force a small intermediate switch so Google detects a change
  if (select.value === lang) {
    select.value = "en";
    select.dispatchEvent(new Event("change"));
  }

  setTimeout(() => {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
    setSelected(lang);
    setOpen(false);
  }, 50);
};
  return (
    <div className="fixed bottom-24 right-4 z-[9999] notranslate" translate="no">
      <div id="google_translate_element" className="hidden" />

      <div className="relative flex flex-col items-end notranslate" translate="no">
        <button
          onClick={() => setOpen((v) => !v)}
          className="px-6 py-3 rounded-full font-semibold text-white bg-blue-950 hover:bg-blue-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all notranslate"
          translate="no"
        >
          Translate
        </button>

        <div
          className={`absolute bottom-full mb-3 right-0 transition-all duration-300 origin-bottom-right ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="w-56 rounded-2xl border border-gray-200 bg-white shadow-2xl p-3 notranslate"
            translate="no"
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-2 notranslate"
              translate="no"
            >
              Select Language
            </label>

            <select
              value={selected}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-900 notranslate"
              translate="no"
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}