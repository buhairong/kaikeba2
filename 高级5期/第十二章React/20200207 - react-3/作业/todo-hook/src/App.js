import React, {useState, useEffect} from 'react';
import Title from './title'
import Input from './input'
import List from './list'
import Foot from './foot'
import './index.css';

function App() {
  let [data, setData] = useState([])

  function add (txt) {
      data.push({
          id: Date.now(),
          done: false,
          txt
      })
      setData([...data])
  }

  function changeDone(id, done) {
      data.forEach(item => {
            if(item.id === id) {
                item.done = done
            }
        })
      setData([...data])
    }

  function changeTxt(id, txt) {
        data.forEach(item => {
            if(item.id === id) {
                item.txt = txt
            }
        })
      setData([...data])
    }

  function remove(id) {
        data = data.filter(item => item.id !== id)
      setData([...data])
    }

  function clearDone() {
        setData([...data.filter(item => !item.done)])
    }

  return (
    <div id="todoapp">
      <Title/>
      <div className="content">
        <Input
            add = {add}
            data = {data}
        />
        <List
            data = {data}
            changeDone = {changeDone}
            changeTxt = {changeTxt}
            remove = {remove}
            add = {add}
        />
        <Foot
            data = {data}
            clearDone = {clearDone}
        />
      </div>
    </div>
  );
}

export default App;
