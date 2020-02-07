import React, { Component } from "react";
class Li extends Component {
    render() {
        let {data,changeDone} = this.props;
        let {done,txt,id} = data;
        return (<li className="">
            <div className={`todo ${done?"done":""}`}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox"
                        checked={done}
                        onChange={({target})=>{
                            changeDone(id,target.checked)
                        }}
                    />
                    <div className="todo-content">{txt}</div>
                    <span className="todo-destroy"></span>
                </div>
                {/* <div className="edit">
                    <input className="todo-input" type="text" value="213"/>
                </div> */}
            </div>
        </li>)
      }
    }
    
export default Li;