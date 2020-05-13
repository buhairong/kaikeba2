import React, {useEffect, useState} from 'react'
import {Link, withRouter, useLocation, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useBack} from '../hook'
import isLogin from '../../store/action/isLogin'
import logout from '../../store/action/logout'

function Header(props) {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const [isBtnShow, setBtnShow] = useState(false)
    const back = useBack(history)
    const user = useSelector(state => {
        return state.getUser
    })
    let {changeShow} = props

    useEffect(() => {
        dispatch(isLogin())
    }, [])

    function getUser() {
        if(location.pathname === '/login') {
            return ''
        }

        if(user) {
            return (
                <span className="header-btn-right">
                <span
                    className="header-user"
                    onClick={
                        () => {
                            setBtnShow(!isBtnShow)
                        }
                    }
                >{user}</span>
                <span
                    className="header-logout-btn"
                    style={{
                        display: isBtnShow ? 'block' : 'none'
                    }}
                    onClick = {
                        () => {
                            dispatch(logout())
                            setBtnShow(false)
                        }
                    }
                >退出</span>
            </span>
            )
        }

        return <Link className="user" to="/login" />
    }

    return (
        <header id="header">
            <nav className="menu">
                {
                    location.pathname === '/login'
                        ? <a
                            className="header-btn-left iconfont icon-back"
                            onClick={back}
                        ></a>
                        : <a
                            className="header-btn-left iconfont icon-hycaidan"
                            onClick={
                                changeShow
                            }
                        ></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {
                getUser()
            }
        </header>
    )
}

/*export default withRouter(Header)*/
export default Header