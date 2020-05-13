import React,{Component} from "react";
class App extends Component {
  state = {
    info: "这是值"
  }
  render(){
    let {info} = this.state;
    return (<div>
        <input 
          type="text" 
          value={info} 
          onChange = {({target})=>{
              this.setState({
                info: target.value
              })
          }}
        />
        <input 
          type="text" 
          value={info} 
          onChange = {({target})=>{
              this.setState({
                info: target.value
              })
          }}
        />
        <input 
          type="text" 
          value={info} 
          onChange = {({target})=>{
              this.setState({
                info: target.value
              })
          }}
        />
        <button>提交信息</button>
    </div>)
  }
}

export default App;