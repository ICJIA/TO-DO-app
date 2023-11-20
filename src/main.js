import './assets/main.css';
//import router from './router'
import { createApp } from 'vue';
import App from './App.vue';
//import Vue from 'vue';

//new Vue({
//    render:h => h(App),
//}).$mount('#app')


const app=createApp(App)
//app.use(router)
app.mount('#app')