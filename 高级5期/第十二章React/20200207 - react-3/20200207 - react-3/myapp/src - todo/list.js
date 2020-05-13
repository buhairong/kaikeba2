import React,{Component} from "react";
import Li from "./li";
class List extends Component {
  render(){
    let {data} = this.props;  
    return (<ul id="todo-list">
            {
                data.map((item,index)=>{
                    return <Li 
                        key = {item.id} 
                        {...this.props}
                        data ={item}
                    />
                })
            }
    </ul>)
  }
}

export default List;