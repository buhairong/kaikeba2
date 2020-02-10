import React,{useState} from "react";
import {Route} from "react-router-dom";
import IndexPage from "./view/";
import AboutPage from "./view/about.js";
import AboutMorePage from "./view/aboutMore";
import Nav from "./component/nav";
/*
   component 属性 传入的是 要渲染的子组件的名字 - 这时没有办法给子组件传参
   如果给路由中的子组件传参 请使用 render 属性
*/
function App(){
  let [user,setUser] = useState("kkb");
  return (<div id="todoapp">
        {/* <Route path="/" exact component={IndexPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/about/more" component={AboutMorePage} /> */}
        <Nav />
        <Route path="/" exact render={()=>{
           return <IndexPage user={user} />
        }} />
        <Route path="/about" exact render={()=>{
           return <AboutPage user={user} />
        }} />
        <Route path="/about/more" render={()=>{
           return <AboutMorePage user={user} />
        }} />
  </div>)
}
export default App;