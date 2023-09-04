import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path:'', name: 'home', component: () => import('../views/Home.vue')},
    {path:'/content', name:'content', component: () => import('../views/Content.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router