import React,{Component} from "react";

export default class FriendList extends Component {
    render(){
        return (
            <div className="friend-list">
                <dl className="friend-group">
                    <dt>家人</dt>
                    <dd>爸爸</dd>
                    <dd>妈妈</dd>
                </dl>
                <dl className="friend-group">
                    <dt>朋友</dt>
                    <dd>张三</dd>
                    <dd>李四</dd>
                    <dd>王五</dd>
                </dl>
                <dl className="friend-group">
                    <dt>客户</dt>
                    <dd>阿里</dd>
                    <dd>腾讯</dd>
                    <dd>头条</dd>
                </dl>
            </div>
        );
    }
}