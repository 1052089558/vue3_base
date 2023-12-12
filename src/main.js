import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import { createPinia } from "pinia"
import piniaPersist from 'pinia-plugin-persist'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 统一导入el-icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia = createPinia()
pinia.use(piniaPersist)
const app=createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
