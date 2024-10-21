import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {registerGlobalComponents} from './global-components'

const app = createApp(App)

registerGlobalComponents({app})

app.use(createPinia())
app.use(router)
app.mount('#app')
