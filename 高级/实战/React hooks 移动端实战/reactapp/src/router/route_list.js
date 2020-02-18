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
        path: '/work',
        exact: true,
        render: (props) => {
            return <Work {...props} />
        }
    }
]

export default routeList