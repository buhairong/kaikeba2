import React from "react";
import {Layout,Affix, Menu,Row,Col} from "antd";
import {nav} from "../router/index";
import {Link,useLocation} from "react-router-dom";
function Heaedr(){
    let {pathname} = useLocation();
    let activeIndex = nav.findIndex((item)=>{
        return pathname === item.url;
    });
    return <Affix>
        <Layout.Header
            style={{
                height: "auto"
            }}
        >
            <Row>
                <Col 
                    xs={24}
                    sm={4}
                >
                    <h1 className="logo">CNode</h1>
                </Col>
                <Col 
                    xs={24}
                    sm={20}
                >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[activeIndex+""]}
                        style={{ lineHeight: '64px' }}
                    >
                        {
                            nav.map((item,index)=>{
                                return <Menu.Item key={index}>
                                    <Link to={item.url}>{item.name}</Link>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </Col>
                
            </Row>
        </Layout.Header>
    </Affix>
}

export default Heaedr;