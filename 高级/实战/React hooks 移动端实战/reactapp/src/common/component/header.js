import React from 'react'
import {Link, withRouter, useLocation, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useBack} from '../hook'

function getUser(path, user) {
    if(path === '/login') {
        return ''
    }

    if(user) {
        return <span className="header-btn-right header-user">{user}</span>
    }

    return <Link className="user" to="/login" />
}

function Header(props) {
    let location = useLocation()
    let history = useHistory()
    let back = useBack(history)
    let user = useSelector(state => {
        return state.getUser
    })
    return (
        <header id="header">
            <nav className="menu">
                {
                    location.pathname === '/login'
                        ? <a
                            className="header-btn-left iconfont icon-back"
                            onClick={back}
                        ></a>
                        : <a className="header-btn-left iconfont icon-hycaidan"></a>
                }


            </nav>
            <h1 className="logo">miaov.com</h1>
            {
                getUser(location.pathname, user)
            }
        </header>
    )
}

/*export default withRouter(Header)*/
export default Header