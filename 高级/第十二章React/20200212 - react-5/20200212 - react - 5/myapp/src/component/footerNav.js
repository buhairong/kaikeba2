import React from "react";
import {useParams,Link} from "react-router-dom";
function FooterNav(){
    let {type,page} = useParams();
    let pageStart = page - 5;
    let pageLen = 10;
    pageStart = pageStart<1?1:pageStart;
    pageStart--;
    return (<nav className="pageNav">
        {[...(".".repeat(pageLen))].map(item=>{
            pageStart++;
            if(pageStart == page){
                return <span key={pageStart}>{pageStart}</span>
            } 
            return <Link to={`/${type}/${pageStart}`} key={pageStart}>{pageStart}</Link>
        })}
    </nav>)
}

export default FooterNav;