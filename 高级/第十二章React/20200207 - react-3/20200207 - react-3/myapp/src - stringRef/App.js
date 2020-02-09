import React,{PureComponent} from "react";
import BScroll from "better-scroll"; 
let list = [...(".".repeat(100))];
/*
  new BScroll();
*/
class App extends PureComponent {
  componentDidMount(){
    //console.log(this.refs.wrap);
    new BScroll(this.refs.wrap);
  }
  render(){
    return (<div
      style={{
        height: "300px",
        border: "1px solid #000",
        overflow:"hidden"
      }}
      ref = "wrap"
    >
      <ul 
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none"
        }}
        ref = "list"
      >
        {list.map((item,index)=>{
          return <li key={index}>这是第{index}个li</li>
        })}
      </ul>
    </div>)
  }
}

export default App;