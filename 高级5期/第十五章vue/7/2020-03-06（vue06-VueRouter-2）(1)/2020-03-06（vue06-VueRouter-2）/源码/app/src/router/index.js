import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// import Home from '@/views/Home';
// import About from '@/views/About';
// import Item from '@/views/Item';

const Home = import('@/views/Home');
const About = import('@/views/About');
const Item = import('@/views/Item');

import User from '@/views/User';
import UserProfile from '@/views/User/Profile';
import UserCart from '@/views/User/Cart';

import Book from '@/views/Book';
import BookBoy from '@/views/Book/Boy';
import BookGirl from '@/views/Book/Girl';
import BookChoose from "@/views/BookChoose";

import Login from "@/views/Login";

import NotFound from "@/views/NotFound";

// 调用 Vue.use 进行插件注册
Vue.use( VueRouter );

// 创建具体的路由对象，这个路由对象就包含了当前应用中的路由信息，比如：路由使用的模式，路由的url与组件的对应关系
const router = new VueRouter({
    // 路由模式
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/item/:itemId(\\d+)',
            name: 'Item',
            component: Item,
            meta: { hideMenu: true },
            props: (r) => {
                return {itemId: Number(r.params.itemId)}
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/user',
            alias: '/member',
            // name: 'User',
            component: User,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',   // 默认子路由，直接绑定到父级的path上
                    name: 'UserProfile',
                    component: UserProfile
                },
                {
                    path: 'cart',
                    name: 'UserCart',
                    component: UserCart
                }
            ]
        },

        {
            path: '/book',
            name: 'Book',
            // redirect: { name: 'BookChoose' },
            // 有的时候重定向需要一些逻辑处理
            redirect: to => {
                // 你实际要访问的地址，如果需要重定向，则返回一个新的路由即可
                // console.log('to', to);
                let bookType = localStorage.getItem('book-type');
                return bookType ? {name: bookType} : { name: 'BookChoose' };
            },
            component: Book,
            children: [
                {
                    path: 'boy',
                    name: 'BookBoy',
                    component: BookBoy
                },
                {
                    path: 'girl',
                    name: 'BookGirl',
                    component: BookGirl
                }
            ]
        },
        {
            path: '/bookchoose',
            name: 'BookChoose',
            component: BookChoose
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }

    ]
});

let isLogin = false;
router.beforeEach( (to, from, next) => {
    // NProgress.start();

    // console.log(to, from);

    // console.log(to.matched);
    if (to.matched.some(record => record.meta.requiresAuth) && !isLogin) {
        next({
            name: 'Login',
        })
    } else {
        next();
    }

    /**
     * 1、是否登录
     * 2、是否是登录页面
     * */
    // if (isLogin) {
    //     next();
    // } else {
    //     // console.log(to, from);
    //     if (to.name !== 'Login') {
    //         next({name: 'Login'});
    //     } else {
    //         next();
    //     }
    //     // if (from.name != 'Login') {
    //     //     next({name: 'Login'});
    //     // }
    // }

    // if (!isLogin && to.name !== 'Login') {
    //     if (from.name != 'Login') {
    //         next({name: 'Login'});
    //     }
    // } else {
    //     next();
    // }

} );

router.afterEach((to, from) => {
    // NProgress.done();
});

export default router;