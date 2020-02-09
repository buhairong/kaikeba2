import React,{PureComponent,createRef} from "react";
import BScroll from "better-scroll"; 
let list = [...(".".repeat(100))];
/*
  new BScroll();
*/
class App extends PureComponent {
  wrap = createRef();
  list = createRef();
  componentDidMount(){
    //console.log(this.wrap.current);
    new BScroll(this.wrap.current);
    console.log(this.wrap.current,this.list.current);
  }
  render(){
    return (<div
      style={{
        height: "300px",
        border: "1px solid #000",
        overflow:"hidden"
      }}
      ref={this.wrap}
    >
      <ul 
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none"
        }}
        ref = {this.list}
      >
        {list.map((item,index)=>{
          return <li key={index}>这是第{index}个li</li>
        })}
      </ul>
    </div>)
  }
}

export default App;