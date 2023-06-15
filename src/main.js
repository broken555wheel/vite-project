import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

//importing the routes
import Home from './components/home/home.vue'
//create a container or variable that will host a list of all routes
const routes = [{
    name:'Home',
    path:'/home',
    component: Home,
}
    
];
const router = createRouter(
    {
        history:createWebHistory(),
        routes:routes
    }
    
)
//create our instance of our application

createApp(App).use(router).mount('#app')
