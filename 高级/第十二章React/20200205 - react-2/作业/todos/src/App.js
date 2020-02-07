import React, {Component} from 'react'
import Title from './title'
import Input from './input'
import List from './list'
import './index.css'

class App extends Component {
  state = {
      data: [
          {
              id: 0,
              done: false,
              txt: '这是测试数据1'
          },
          {
              id: 1,
              done: true,
              txt: '这是测试数据2'
          }
      ]
  }

  add = (txt) => {
      let {data} = this.state
      data.push({
          id: Date.now(),
          done: false,
          txt
      })
      this.setState({
          data
      })
  }

  changeDone = (id, done) => {
      let {data} = this.state

      data.forEach(item => {
          if(item.id === id) {
              item.done = done
          }
      })

      this.setState({
          data
      })
  }

  render() {
    let {data} = this.state
    return (
        <div id="todoapp">
          <Title/>
          <div className="content">
            <Input add={this.add} />
            <List
                data = {data}
                changeDone = {this.changeDone}
            />
          </div>
        </div>
    )
  }
}

export default App
