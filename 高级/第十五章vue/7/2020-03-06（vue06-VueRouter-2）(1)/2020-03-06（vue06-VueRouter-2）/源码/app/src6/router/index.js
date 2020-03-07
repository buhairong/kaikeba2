import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Item from '@/views/Item';

import User from '@/views/User';
import UserProfile from '@/views/User/Profile';
import UserCart from '@/views/User/Cart';

import Book from '@/views/Book';
import BookBoy from '@/views/Book/Boy';
import BookGirl from '@/views/Book/Girl';
import BookChoose from "@/views/BookChoose";

import NotFound from "@/views/NotFound";

// 调用 Vue.use 进行插件注册
Vue.use( VueRouter );

// 创建具体的路由对象，这个路由对象就包含了当前应用中的路由信息，比如：路由使用的模式，路由的url与组件的对应关系
const router = new VueRouter({
    // 路由模式
    mode: 'history',
    // base: '/kkb/',
    // linkExactActiveClass: 'abc',
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
            /*
            * 当设置成true的，自动把路由中的params中的参数数据映射到对应的组件中
            * */
            // props: true,

            /*
            * 如果返回一个对象，则该对象会被融合（合并）到对应组件的props中
            * */
            // props: {a: 1, b: 2}

            /**
             * 是一个函数，返回值就是要合并到组件的props中的
             */
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
            children: [
                {
                    // 如果当前这个路由是 /user 的子路由，比如，访问的地址我们想设计成：/user/profile，就不要以 / 开头 ，直接填写 /user/ 后面的内容
                    // path: 'profile',
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
            path: '*',
            name: 'NotFound',
            component: NotFound
        }

    ]
});

export default router;