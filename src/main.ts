import { createApp } from 'vue'
//@ts-ignore
import {createPinia} from "pinia";
//@ts-ignore
import App from './App.vue'
import {router} from "./router";
import './styles/tailwindcss.css';
import './styles/index.less'

const  pinia = createPinia()
const app=createApp(App)

app.use(router)
// @ts-ignore
app.use(pinia)
app.mount('#app')