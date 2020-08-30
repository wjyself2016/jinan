import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 主页面
import Index from '@/views/index/Index';
import Login from '@/views/login/Login';
import Back from '@/views/back/Back';
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/back',
        component: Back
    }
];

const router = new VueRouter({
    routes 
});

export default router;