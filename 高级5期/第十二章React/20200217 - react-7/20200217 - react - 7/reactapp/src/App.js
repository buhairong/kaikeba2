import React from 'react';
import {route} from "./router/index";
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrap">
        <Switch>
            {route.map((item,index)=>{
                return (<Route 
                    path={item.path}
                    key={index}
                    exact={item.exact}
                    render={(props)=>{
                        //props = {...props,info:"123"}
                        return item.render(props);
                    }}
                />)
            })}
        </Switch>
    </div>
  );
}

export default App;
