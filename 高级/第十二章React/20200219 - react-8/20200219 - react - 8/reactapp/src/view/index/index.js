import React, { Fragment } from "react";
import IndexNav from "./nav";
import IndexList from "./list";
import PageNav from "./pagenav";
export default function IndexPage(props){
    return <Fragment>
        <IndexNav />  
        <IndexList />  
        <PageNav />
    </Fragment>
}