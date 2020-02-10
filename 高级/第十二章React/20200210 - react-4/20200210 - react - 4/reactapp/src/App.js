import React,{useState} from "react";
import {Route,Switch} from "react-router-dom";
import Nav from "./component/nav";
import IndexPage from "./view/";
import AboutPage from "./view/about";
import ServerPage from "./view/sever";
import JoinUs from "./view/joinus";
import Page404 from "./view/page404";
function App(){
  return (<div id="todoapp">
        <Nav />
        <Switch>
            <Route path="/" exact  component={IndexPage}/>
            <Route path="/about" exact  component={AboutPage}/>
            <Route path="/server" exact  component={ServerPage}/>
            <Route path="/join" exact  component={JoinUs}/>
            <Route component={Page404}/>
        </Switch>
  </div>)
}
export default App;