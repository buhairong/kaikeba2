import React from 'react';
import {route} from "./router/index";
import { Switch, Route } from 'react-router-dom';
import Heaedr from './component/header';
import "./static/css/index.css";
import Footer from './component/footer';
import { Layout } from 'antd';
function App() {
  return (
    <Layout>
        <Heaedr/>
        <Layout.Content style={{ 
            padding: '0 50px', 
            marginTop: 10
        }}>
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
        </Layout.Content>
        <Footer />
    </Layout>
  );
}

export default App;
