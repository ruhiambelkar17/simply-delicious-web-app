import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login';
import Router from 'vue-router';

const app=createApp(App);

app.use(vue3GoogleLogin, {
    clientId:'1059135692246-donflb298kffrdko5el2j7fsk4q31umc.apps.googleusercontent.com'
});

app.use(Router);

app.mount('#app');
