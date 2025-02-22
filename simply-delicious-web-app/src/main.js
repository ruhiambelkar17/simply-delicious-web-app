import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login';
import Router from './router/Index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const app=createApp(App);

app.use(vue3GoogleLogin, {
    clientId:'1059135692246-donflb298kffrdko5el2j7fsk4q31umc.apps.googleusercontent.com'
});

app.use(Router);

app.mount('#app');

