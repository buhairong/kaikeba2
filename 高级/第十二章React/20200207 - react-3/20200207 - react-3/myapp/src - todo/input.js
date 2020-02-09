import React,{Component} from "react";
class Input extends Component {
  state={
      val:""
  }  
  render(){
    let {add} = this.props;
    let {val} = this.state;  
    return (<div id="create-todo">
                <input 
                    id="new-todo" 
                    placeholder="What needs to be done?" 
                    autoComplete="off" 
                    type="text"
                    value={val} 
                    onChange={({target})=>{
                        this.setState({val:target.value})
                    }}
                    onKeyDown={({keyCode})=>{
                        if(keyCode==13){
                            if(!val.trim()){
                                alert("输入点内容吧")
                            } else {
                                add(val); 
                                this.setState({val:""});
                            }
                        }
                    }}
                />
        </div>)
  }
}

export default Input;