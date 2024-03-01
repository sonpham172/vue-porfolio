import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import router from './router'
import { registerLayouts } from './layouts/register';

const app = createApp(App)

app.use(router)
registerLayouts(app);

app.mount('#app')
AOS.init()