import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'vue3-toastify/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
