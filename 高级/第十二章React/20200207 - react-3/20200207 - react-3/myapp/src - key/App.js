import React,{Component} from "react";
class App extends Component {
  state = {
    data:[
      {
        id: 0,
        content: "第1条数据"
      },{
        id: 1,
        content: "第2条数据"
      },{
        id: 2,
        content: "第3条数据"
      },{
        id: 3,
        content: "第4条数据"
      },{
        id: 4,
        content: "第5条数据"
      }
    ]
  }
  render(){
    let {data} = this.state;
    return <div>
        {
          data.map((item,index)=>{
            return <p key={item.id}>{item.content}<a onClick={()=>{
                data = data.filter(itemData=>item!==itemData);
                this.setState({
                  data
                })
            }}>删除</a></p>
          })
        }
    </div>  
  }
}

export default App;