import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './view';
import AboutPage from './view/about';
import Page404 from './view/page404';
function App() {
  return (
    <div className="wrap">
        {/* 
          path 默认是模糊匹配，只要url是以path开始的都可以匹配的到
        */}
        <Switch>
            {/* <Route path="/" exact component={IndexPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={Page404} /> */}
            <Route path="/" exact render={(props)=>{
              //console.log(props);
              return <IndexPage {...props} />
            }} />
            <Route path="/about" render={(props)=>{
             // console.log(props);
              return <AboutPage  {...props}  />
            }} />
            <Route render={(props)=>{
              //console.log(props);
              return <Page404  {...props}  />
            }} />
        </Switch>
        
    </div>
  );
}

export default App;
