import React from 'react';
import {nav} from "../router/router";
import { NavLink,useLocation} from 'react-router-dom';
export default function Nav(){
    let {pathname} = useLocation();
    pathname = pathname.split("/");
    return (
        <nav className="nav">
            {
                nav.map((route,index)=>{
                    let {url} = route;
                    url = url.split("/");
                    return (<NavLink 
                        to={route.url}
                        key = {index}
                        exact = {route.exact}
                        activeClassName="active"
                        isActive={()=>{
                            return url[1] == pathname[1];
                        }}
                    >
                        {route.txt}
                    </NavLink>);
                })
            }
        </nav>
    )
}