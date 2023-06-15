import { createApp } from 'vue'
import './style.css'
//importing methods that will enable use to use vue-router
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

//importing the routes
import home from './components/home/home.vue'
//create a container or variable that will host a list of all routes
//creating route object array
//route object is composed of three pars ==. path..name..component
const routes = [{
    name:'home',
    path:'/',
    component: home
}
    
];

//initialize the route using the create route method
const router = createRouter(
    {
        history:createWebHistory(),
        routes:routes,
    }
    
)
//create our instance of our application

createApp(App).use(router).mount('#app')
