import React from 'react';
import "./reset.css";
import styleed from "./app.module.css";
import Child from './child';
function App() {
  return (
    <div className={styleed.app}>
      <Child />
      <div className="box"></div>
    </div>
  );
}

export default App;
