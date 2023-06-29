import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import * as labsComponents from 'vuetify/labs/components'
import routes from './routes'


const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  // labsComponents,
})

app.use(pinia)
app.use(vuetify)
app.use(routes)
app.mount('#app')