import React, {Component, createRef} from 'react'

class Li extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false
        }
    }

    input = createRef()

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isEdit === false && this.state.isEdit === true) {
            this.input.current.focus()
        }
    }

    render() {
        let {data, changeDone, remove, changeTxt} = this.props
        let {isEdit} = this.state
        let {id, done, txt} = data
        return (
            <li className={isEdit ? 'editing' : ''}>
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
                        <div
                            className="todo-content"
                            onDoubleClick={
                                () => {
                                    this.setState({
                                        isEdit: true
                                    })
                                }
                            }
                        >{txt}</div>
                        <span
                            className="todo-destroy"
                            onClick={
                                () => {
                                    remove(id)
                                }
                            }
                        />
                    </div>
                    <div className="edit">
                        <input
                            type="text"
                            defaultValue={txt}
                            className="todo-input"
                            ref={this.input}
                            onChange={
                                ({target}) => {

                                }
                            }
                            onBlur={
                                ({target}) => {
                                    if(target.value.trim()) {
                                        changeTxt(id, target.value.trim())
                                    } else {
                                        target.value = txt
                                    }
                                    this.setState({
                                        isEdit: false
                                    })
                                }
                            }
                        />
                    </div>
                </div>
            </li>
        )
    }
}

export default Li