import React, {useState} from 'react'

function Header(props) {
    const [todo, setTodo] = useState('')
    let {addTodo} = props

    return (
        <header>
            <h1>Todos</h1>
            <input
                id="new-todo"
                type="text"
                placeholder="What needs to be done?"
                value={todo}
                autoComplete="off"
                onChange={
                    (e) => {
                        setTodo(e.target.value)
                    }
                }
                onKeyDown={
                    (e) => {
                        if(e.keyCode === 13) {
                            if(todo.trim()) {
                                addTodo(todo)
                                setTodo('')
                            } else {
                                alert('输入点内容吧')
                                e.target.focus()
                            }
                        }
                    }
                }
            />
        </header>
    )
}

export default Header