import { createApp } from 'vue'
import App from './App.vue'

import ElementUI from 'pf-element-demi'

const app = createApp(App)
app.use(ElementUI)

app.mount('#app')
