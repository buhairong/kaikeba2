import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Item from '@/views/Item';
import User from '@/views/User';
import UserProfile from '@/views/User/Profile';
import UserCart from '@/views/User/Cart';

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
            component: Item
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/user',
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
        }
    ]
});

export default router;