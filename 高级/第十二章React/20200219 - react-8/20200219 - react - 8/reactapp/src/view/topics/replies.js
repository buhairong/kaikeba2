import React from "react";
import { List } from "antd";
export default function Replies(props){
    let {data,loading} = props;
    return (<List
        className="replies"
        style={{
            padding: "10px 20px"
        }}
        header={<h2>评论列表</h2>}
        loading={loading}
        dataSource={data}
        renderItem={(item)=>{
            return <List.Item>
                <div dangerouslySetInnerHTML={{
                    __html:item.content
                }}></div>
            </List.Item>
        }}
    />)
}