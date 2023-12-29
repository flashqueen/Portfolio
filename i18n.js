import { createI18n } from "vue-i18n";
import en from './src/locales/en.json'
import ptBR from './src/locales/ptBR.json'

function loadLocaleMessages() {
    const locales = [{en: en}, {ptBR: ptBR}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: 'ptBR',
    fallbackLocale: 'ptBR',
    messages: loadLocaleMessages()
})