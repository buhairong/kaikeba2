import React from 'react';
import {route} from "./router/index";
import {Switch, Route} from 'react-router-dom';
import {Layout} from "antd"
import Header from "./component/header";
import "./static/css/base.css";
import Footer from './component/footer';
function App() {
  return (
    <Layout>
        <Header />
        <Layout.Content
            style={{
                padding: "10px 50px"
            }}
        >
            <div className="main">
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
        </Layout.Content>
        <Footer />
    </Layout>
  );
}

export default App;
