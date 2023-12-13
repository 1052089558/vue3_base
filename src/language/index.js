import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import en from './locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // 默认显示语言
  //语言库
  messages: {
    'zh-cn': zhCN,
    'en': en
  }
})

export default i18n