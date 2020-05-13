import React from "react";
import { Layout,Menu, Row, Col, Affix } from "antd";
import {nav} from "../router/index";
import { Link, useLocation } from "react-router-dom";
export default function Header(){
    let {pathname} = useLocation();
    let activeIndex = nav.findIndex(item=>item.url === pathname);
    return (
    <Affix offsetTop={0}>
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
                    {nav.map((item,index)=>{
                            return <Menu.Item key={index}><Link to={item.url}>{item.name}</Link></Menu.Item>
                    })}
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    </Affix>);
}