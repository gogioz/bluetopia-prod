import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Discover: "Discover",
      Team: "Team",
      Partners: "Partners",
      Activities: "Activities",
      Contact: "Contact",
    },
  },
  ar: {
    translation: {
      Discover: "القصة",
      Team: "الفريق",
      Partners: "الشركاء",
      Activities: "الأنشطة",
      Contact: "تواصل",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
