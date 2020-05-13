import React from 'react';
import nav_data from "../router/nav";
import { NavLink,useLocation } from 'react-router-dom';
function Nav(){
    let {pathname} = useLocation();
    pathname = pathname.split("/")
    return (
        <nav className="nav">
            {
                nav_data.map((item,index)=>{
                    let url = item.url.split("/");
                    return (<NavLink 
                        key={index}
                        to={item.url}
                        exact = {item.exact}
                        activeClassName={"active"}
                        isActive={()=>{
                            return url[1] == pathname[1]&&pathname[2]>0;
                        }}
                    >
                        {item.txt}
                    </NavLink>);
                })
            }
        </nav>
    );
}
export default Nav;
