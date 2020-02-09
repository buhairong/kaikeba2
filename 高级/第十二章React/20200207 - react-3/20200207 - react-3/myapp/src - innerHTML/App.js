import React,{PureComponent} from "react";
let message = `
  <h2>天气不错</h2>
  <p>心情棒棒的</p>
`;
class App extends PureComponent {
  render(){
    return (<div dangerouslySetInnerHTML={{
      __html:message
    }}></div>)
  }
}

export default App;