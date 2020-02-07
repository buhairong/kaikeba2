import React, {Component} from 'react'

class Li extends Component {
    render() {
        let {data, changeDone} = this.props
        let {done, txt, id} = data
        return (
            <li className="">
                <div className={`todo ${done ? 'done' : ''}`}>
                    <div className="display">
                        <input
                            type="checkbox"
                            className="check"
                            checked={done}
                            onChange={({target}) => {
                                changeDone(id, target.checked)
                            }}
                        />
                        <div className="todo-content">{txt}</div>
                        <span className="todo-destroy"></span>
                    </div>
                    {/*<div className="edit">
                        <input type="text" value="213" className="todo-input" />
                    </div>*/}
                </div>
            </li>
        )
    }
}

export default Li