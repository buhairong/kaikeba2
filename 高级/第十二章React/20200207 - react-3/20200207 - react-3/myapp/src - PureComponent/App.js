import React,{PureComponent,Component} from "react";
class App extends PureComponent {
  state = {
    name: "kkb",
    child: ["kkb-child1","kkb-child2","kkb-child3"]
  }
  componentDidUpdate(){
    console.log(1);
  }
  render(){
    let {name,child} = this.state;
    return (<div>
      <h1>{name}</h1>
      <ul>
        {child.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
      <button onClick={()=>{
        this.setState({name:"kkb"});
      }}>升级</button>
      <button onClick={()=>{
        child.push("新业务");
        this.setState({child:[...child]})
      }}>扩大</button>
    </div>)
  }
}

export default App;