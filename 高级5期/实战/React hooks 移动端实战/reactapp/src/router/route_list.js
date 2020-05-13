import React from 'react'
import Index from '../view/index'
import Login from '../view/login'
import Course from '../view/course'
import Lecturer from '../view/lecturer'
import Work from '../view/work'

const routeList = [
    {
        name: '首页',
        path: '/',
        exact: true,
        render: (props) => {
            return <Index {...props} />
        }
    },
    {
        name: '登录',
        path: '/login',
        exact: true,
        render: (props) => {
            return <Login {...props} />
        }
    },
    {
        name: '课程安排',
        path: '/course',
        exact: true,
        render: (props) => {
            return <Course {...props} />
        }
    },
    {
        name: '讲师团队',
        path: '/lecturer',
        exact: true,
        render: (props) => {
            return <Lecturer {...props} />
        }
    },
    {
        name: '作品详情',
        path: '/work/:id',
        exact: true,
        render: (props) => {
            return <Work {...props} />
        }
    }
]

const menuList = [
    {
        name: '首页',
        path: '/',
        exact: true,
        icon: 'icon-home'
    },
    {
        name: '课程安排',
        path: '/course',
        exact: true,
        icon: 'icon-kecheng'
    },
    {
        name: '讲师团队',
        path: '/lecturer',
        exact: true,
        icon: 'icon-peixunjiangshi'
    }
]

export default routeList
export  {
    menuList
}