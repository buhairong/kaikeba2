import React, { Fragment } from "react";
import Nav from "./nav";
import IndexList from "./list";
import PageNav from "./pagenav";
export default function IndexPage(){
    return <Fragment>
        <Nav/>
        <IndexList />
        <PageNav />
    </Fragment>
}