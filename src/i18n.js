import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './data/translations/enTranslation.json';
import plTranslation from './data/translations/plTranslation.json';
import deTranslation from './data/translations/deTranslation.json';
import nlTranslation from './data/translations/nlTranslation.json';

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
