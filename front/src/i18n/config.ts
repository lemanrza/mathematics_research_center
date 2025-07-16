import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import az from "./locales/az/translation.json";

const resources = {
  en: { translation: en },
  az: { translation: az },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: resources,
    fallbackLng: "az",
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;