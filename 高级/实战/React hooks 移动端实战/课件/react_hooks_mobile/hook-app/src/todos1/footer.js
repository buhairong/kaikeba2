import React from 'react'

function Footer(props) {
    let {todos, removeCompleted} = props
    let completed = todos.filter(item => item.completed)
    let unCompleted = todos.filter(item => !item.completed)
    return (
        <footer style={{display: todos.length ? 'block' : 'none'}}>
            <a
                id="clear-completed"
                style={{display: completed.length ? 'block' : 'none'}}
                onClick={() => {removeCompleted()}}
            >
                Clear {completed.length} completed item
            </a>
            <div id="todo-count" style={{display: unCompleted.length ? 'block' : 'none'}}>{unCompleted.length} items left</div>
        </footer>
    )
}

export default Footer