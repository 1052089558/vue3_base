import { createApp } from 'vue'
import './assets/reset.css'
import App from './App.vue'
import { createPinia } from "pinia"
import piniaPersist from 'pinia-plugin-persist'
import router from "./router"
const pinia = createPinia()
pinia.use(piniaPersist)
const app=createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
