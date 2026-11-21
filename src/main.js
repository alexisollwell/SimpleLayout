import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import SimpleLayout from './components/layout'

const app = createApp(App)

app.use(SimpleLayout)

app.mount('#app')
