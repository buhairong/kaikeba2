import React from 'react';
import Title from './component/title'
import AddGood from './component/addGood'
import GoodList from './component/goodList'
import Total from './component/total'
import './index.css'

function App() {
  return (
    <div>
      <Title/>
      <AddGood/>
      <GoodList/>
      <Total/>
    </div>
  );
}

export default App;
