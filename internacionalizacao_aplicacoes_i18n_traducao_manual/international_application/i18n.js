import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import ptTranslation from './locales/pt.json';

const resources = {
    en: {
        translation: enTranslation
    },
    es: {
        translation: esTranslation
    },
    pt: {
        translation: ptTranslation
    }
};

const language = localStorage.getItem('locale') || navigator.language;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: language,
        fallbackLng: 'pt',
    });

export default i18n;