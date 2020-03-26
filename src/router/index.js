import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/Layout/Layout.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    name: 'index',
    component: layout,
    children: [{
        path: '/home',
        component: () =>
            import ('@/views/Home/Home.vue')
    }, {
        path: '/dataResource',
        component: () =>
            import ('@/views/DataResource/DataResource.vue')
    }]
}]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router