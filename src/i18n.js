import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './json/headerData/enTranslation.json';
import plTranslation from './json/headerData/plTranslation.json';
import deTranslation from './json/headerData/deTranslation.json';
import nlTranslation from './json/headerData/nlTranslation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pl: {
        translation: plTranslation,
      },
      de: {
        translation: deTranslation,
      },
      nl: {
        translation: nlTranslation,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
