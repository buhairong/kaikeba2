import React from "react";
import {Route} from "react-router-dom";
import IndexPage from "./view/";
import AboutPage from "./view/about.js";
import AboutMorePage from "./view/aboutMore";
function App(){
  return (<div id="todoapp">
        {/* url = "/about/more"  path="/about" -- 匹配 url 中以 /about 开始  */}
        <Route path="/" exact component={IndexPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/about/more" component={AboutMorePage} />
  </div>)
}
export default App;