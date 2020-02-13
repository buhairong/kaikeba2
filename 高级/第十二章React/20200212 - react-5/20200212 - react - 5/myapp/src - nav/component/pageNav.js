import React from "react";
import {Link,useParams} from "react-router-dom";
export default function PageNav(){
    let {type,page} = useParams();
    let pageLength = 10;
    let pageStart = page-5;
    pageStart=pageStart<1?1:pageStart;
    pageStart--;
    return (
        <nav className="pageNav">
            {[...(".".repeat(pageLength))].map((item,index)=>{
                pageStart++;
                if(pageStart == page){
                    return <span key={index}>{pageStart}</span>
                } else {
                    return <Link key={index} to={`/${type}/${pageStart}`}>{pageStart}</Link>
                }
            })}
        </nav>
    );
}