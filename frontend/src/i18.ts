import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const translationsEn = require("./assets/localization/en.json");
// const translationAr = require("./assets/localization/ar.json")
import translationEn from "./assets/localization/en.json"
import translationAr from "./assets/localization/ar.json"
const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: ''
    },
    resources,
    lng: localStorage.getItem("lang") === "ar" ? "ar" : "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;