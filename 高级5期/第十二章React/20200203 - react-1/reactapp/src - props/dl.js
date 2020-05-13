import React,{Component} from "react";
class Dl extends Component {
    render(){
        console.log(this.props);
        let {data} = this.props;
        let {title,list} = data;
        // props 属性，在父组件调用时，加在组件属性中的相应内容，我们可以在子组件的 props 中接收到传递过来的相应数据
        return ( <dl className="friend-group">
                <dt>{title}</dt>
                {/* <dd>张三</dd>
                <dd>李四</dd>
                <dd>王五</dd> */}
                {list.map((item,index)=>{
                    return <dd key={index}>{item.name}</dd>
                })}
        </dl>);
    }
}

export default Dl;