import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

const opt = {
    name: 'VueCustomTooltip',
    zIndex: 1000000,
    color: '#fff',
    background: '#000',
    borderRadius: 100,
    fontWeight: 400,
  }

const app = createApp(App)


app.use(router).use(VueCustomTooltip,opt).mount('#app')
