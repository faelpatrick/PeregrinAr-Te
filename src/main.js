import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'
import {inject} from '@vercel/analytics';
import router from './router';

inject();

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')
