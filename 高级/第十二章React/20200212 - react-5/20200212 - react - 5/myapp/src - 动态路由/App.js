import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import IndexPage from './view';
import Page404 from './view/page404';
function App() {
  return (
    <div className="wrap">
        <Switch>
            <Route path="/" exact render={()=>{
                return <Redirect to="/list/1" />
            }} />
            <Route path="/list/:page" exact render={()=>{
              return <IndexPage />
            }} />
            <Route render={(props)=>{
              return <Page404  {...props}  />
            }} />
        </Switch>
        
    </div>
  );
}

export default App;
