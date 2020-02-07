import React, {Component} from 'react'
import Li from './li'

class List extends Component {
    render() {
        let {data, changeDone} = this.props
        return (
            <ul id="todo-list">
                {
                    data.map((item, index) => {
                        return <Li
                            key = {index}
                            data = {item}
                            changeDone = {changeDone}
                        />
                    })
                }
            </ul>
        )
    }
}

export default List