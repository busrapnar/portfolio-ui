import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/*const resources = {
tr:{
    translation: {

    }
},
en:{
    translation: {
        
    }
}
}*/

i18n
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
    fallbackLng: 'tr',
    //resources
    //backend: {loadPath: 'http.example'}
})

export default i18n