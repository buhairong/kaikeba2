import React from "react";
import { List } from "antd";

function Replies(props){
    let {load,data} = props;
    return <List 
        header={<h3 style={{padding:"10px"}}>评论列表</h3>}
        loading={load}
        dataSource={data}
        style={{
            background:"#fff",
            marginTop: 20,
            padding: "0 20px"
        }}
        renderItem={(itemData)=>{
            console.log(itemData);
            return <List.Item>
                <div dangerouslySetInnerHTML={{
                __html:itemData.content
            }}></div>
            </List.Item>
        }}
    />
}

export default Replies
