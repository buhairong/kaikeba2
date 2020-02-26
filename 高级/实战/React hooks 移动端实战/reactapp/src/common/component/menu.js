import React from 'react'
import {NavLink} from 'react-router-dom'
import {menuList} from '../../router/route_list'

function Menu(props) {
    let {menuHide} = props
    return (
        <nav id="menu">
            {
                menuList.map((item, index) => {
                    return (
                    <NavLink
                        key={index}
                        className={`iconfont ${item.icon}`}
                        to={item.path}
                        exact={item.exact}
                        onClick={menuHide}
                    >
                        {item.name}
                    </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default Menu