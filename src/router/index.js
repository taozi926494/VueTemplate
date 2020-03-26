import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import layout from '../views/Layout/Layout.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    name: 'index',
    component: layout,
    children: [{
        path: '/home',
        component: Home
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router