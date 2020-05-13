import React from 'react';
import Nav from './component/nav';
import { Switch, Route } from 'react-router-dom';
import router from "./router/router";
function App(){
    return (<div className="wrap">
        <Nav />
        <Switch>
            {router.map((item,index)=>{  
                {/* return <Route path={item.path} render={(props)=>{
                    
                    return item.render({info,...props});
                }} /> */}
                return <Route path={item.path} exact={item.exact} render={item.render} key={index} />
            })}
        </Switch>
    </div>)
}
export default App;
