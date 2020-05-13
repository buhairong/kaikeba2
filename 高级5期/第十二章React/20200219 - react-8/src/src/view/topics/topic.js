import React, { useEffect } from "react";
import { Card } from "antd";
export default function Topic(props){
    let {title,content,load} = props;
    return <Card
        loading={load}
        title={title}
        className={"topic_card"}
    >
        <div
            dangerouslySetInnerHTML={{
                __html:content
            }}
        ></div>
    </Card>
}