import React,{Component} from "react";
import "./index.css";
import Title from "./title";
import Input from "./input";
import List from "./list";
class App extends Component {
  constructor(props){
      super(props);
      let data = window.localStorage.getItem("todo");
      data = data?JSON.parse(data):[];
      console.log(data);
      this.state = {data};
  }
  add=(txt)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      done: false,
      txt
    });
    this.setState({data});
  }
  changeDone=(id,done)=>{
      let {data} = this.state;
      data.forEach(item=>{
        if(item.id == id){
          item.done = done;
        }
      })
      this.setState({data});
  }
  componentDidUpdate(){
    let {data} = this.state;
    data = JSON.stringify(data);
    window.localStorage.setItem("todo",data);
  }
  render(){
    let {data} = this.state;
    return (<div id="todoapp">
            <Title />
            <div className="content">
                <Input add={this.add} />
                <List
                  data = {data}
                  changeDone = {this.changeDone}
                />
            </div>
    </div>)
  }
}

export default App;