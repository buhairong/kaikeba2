import React,{PureComponent} from "react";
class PopWindow extends PureComponent {
  state = {
    close: false
  }
  render(){
    let {close} = this.state;
    let {children} = this.props;
    return (<div
        style={{
          display: close?"none":"block"
        }}
    >
        {children}
        <button onClick={()=>{
          this.setState({
            close:true
          })
        }}>关闭弹窗</button>
    </div>)
  }
}
class App extends PureComponent {
  state = {
    show: false
  }
  render(){
    let {show} = this.state;
    return (<div>
    {
      show?(<PopWindow>
          <h1>上元节快乐</h1>
          <p>明天上元节了，本班级重要通知，明天不上课</p>
      </PopWindow>):""
    }
     <button onClick={()=>{
       this.setState({
        show:true
       })
     }}>显示弹窗</button>
    </div>)
  }
}

export default App;