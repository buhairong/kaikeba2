import React from "react";
import { Card } from "antd";
export default function Topic(props){
    let {title,content,loading} = props;
    return <Card
        title={title}
        loading={loading}
    >
        <div
            dangerouslySetInnerHTML={{
                __html:content
            }}
        ></div>
    </Card>
}