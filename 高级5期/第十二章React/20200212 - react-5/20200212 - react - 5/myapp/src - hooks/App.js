import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './view';
import AboutPage from './view/about';
import Page404 from './view/page404';
function App() {
  return (
    <div className="wrap">
        <Switch>
            <Route path="/" exact render={(props)=>{
              return <IndexPage {...props} />
            }} />
            <Route path="/about" render={(props)=>{
              return <AboutPage  {...props}  />
            }} />
            <Route render={(props)=>{
              return <Page404  {...props}  />
            }} />
        </Switch>
        
    </div>
  );
}

export default App;
