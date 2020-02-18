import React from 'react'
import IndexPage from '../view/index'
import AboutPage from '../view/about'
import GetstartPage from '../view/getstart'
import ToppicsPage from '../view/topics'
import UserPage from '../view/user'
import Page404 from '../view/page404'

const route = [
    {
        path: '/',
        name: '首页',
        exact: true,
        render(props){
            return <IndexPage {...props} />
        }
    },
    {
        path: '/about',
        name: '关于',
        exact: true,
        render(props){
            return <AboutPage {...props} />
        }
    },
    {
        path: '/getstart',
        name: '新手入门',
        exact: true,
        render(props){
            return <GetstartPage {...props} />
        }
    },
    {
        path: '/topic/:id',
        name: '文章详情',
        exact: true,
        render(props){
            return <ToppicsPage {...props} />
        }
    },
    {
        path: '/user/: loginname',
        name: '用户详情',
        exact: true,
        render(props){
            return <UserPage {...props} />
        }
    },
    {
        path: '',
        name: '404页面',
        exact: true,
        render(props){
            return <Page404 {...props} />
        }
    }
]

const nav = [
    {
        name: '首页',
        url: '/',
        exact: true
    },
    {
        name: '新手入门',
        url: '/getstart',
        exact: true
    },
    {
        name: '关于',
        url: '/about',
        exact: true
    }
]

export {
    route,
    nav
}