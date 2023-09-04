import { createApp } from 'vue'
import {initializeApp} from 'firebase/app'
import './style.css'
import router from './plugins/router'
import App from './App.vue'
import Home from './views/Home.vue'

//init firebase
const app = initializeApp({
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_PROJECT_BUCKET,
});

createApp(App).use(router).mount('#app')


