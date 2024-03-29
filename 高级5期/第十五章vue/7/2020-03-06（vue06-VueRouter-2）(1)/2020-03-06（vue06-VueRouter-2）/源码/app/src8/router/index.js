import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Component1 from '@/views/Component1';
import Component2 from '@/views/Component2';
import Component3 from '@/views/Component3';
import Component4 from '@/views/Component4';

Vue.use( VueRouter );

const router = new VueRouter({
    // 路由模式
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        console.log(savedPosition);
        if (savedPosition) {
            return savedPosition;
        } else {
            return {y: 0}
        }
        // return {
        //     y: 0
        // }
    },
    routes: [
        {
            path: '/component1',
            name: 'Component1',
            component: Component1
        },
        {
            path: '/component2',
            name: 'Component2',
            component: Component2
        },
        {
            path: '/component3',
            name: 'Component3',
            component: Component3
        },
        {
            path: '/component4',
            name: 'Component4',
            component: Component4
        }

    ]
});

export default router;