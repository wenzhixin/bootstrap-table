import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === 'development'

app.mount('#app')
