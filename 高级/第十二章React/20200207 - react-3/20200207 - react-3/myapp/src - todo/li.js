import React, { Component,createRef } from "react";
class Li extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            inputVal: props.txt
        }
    }
    input = createRef();
    /*
        当我们进入编辑状态时，一定需要输入框获得焦点，否则在点击地方时，没有办法触发到输入框的失焦时间
    */
   componentDidUpdate(prevProps,prevState){
       // 上一次编辑状态为 false，当前编辑状态为true 代表我们进入编辑状态
       if(prevState.isEdit == false&&this.state.isEdit==true){
            this.input.current.focus();    
       }
   }
    render() {
        let {data,changeDone,remove,changeTxt} = this.props;
        let {done,txt,id} = data;
        let {isEdit,inputVal} = this.state;
        return (<li className={isEdit?"editing":""}>
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
                    <div 
                        className="todo-content"
                        onDoubleClick = {()=>{
                            this.setState({
                                isEdit: true
                            })
                        }}
                    >{txt}</div>
                    <span 
                        className="todo-destroy"
                        onClick={()=>{
                            remove(id);
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text" 
                        value={inputVal}
                        ref= {this.input}
                        onChange={({target})=>{
                            this.setState({
                                inputVal: target.value
                            });
                        }}
                        onBlur={()=>{
                            if(inputVal.trim()){
                                changeTxt(id,inputVal);
                            } else {
                                this.setState({
                                    inputVal:txt
                                });
                            }
                            this.setState({
                                isEdit: false
                            })
                        }}
                    />
                </div>
            </div>
        </li>)
      }
    }
    
export default Li;