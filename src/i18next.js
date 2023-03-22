// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import languageDetector from 'i18next-browser-languagedetector'
// import translateEn from './translate/en.json'
// import translateAr from './translate/ar.json'

// i18n
// .use(languageDetector)
//   .use(initReactI18next) 
//   .init({

   
//     resources: {
//       en: {
//         translation: translateEn,
//       },
//       ar:{
//         translation: translateAr
//       }
//     },
//     // lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false 
//     }
//   });


//   export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import translateEn from "./translate/en.json";
import translateAr from "./translate/ar.json";

const resources = {
  en: {
    translation: translateEn,
  },
  ar: {
    translation: translateAr,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",

    interpolation: {
      escapeValue: false,
    },
    // react:{
    //   useSuspense:true
    // }
  });

export default i18n;
