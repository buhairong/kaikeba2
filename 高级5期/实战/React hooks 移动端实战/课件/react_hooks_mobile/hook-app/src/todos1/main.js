import React, {useState, useEffect, useRef} from 'react'

function Li(props) {
    let {inner, changeCompleted, remove, changeVal} = props
    const [edit, setEdit] = useState(false)
    let {id, completed, val} = inner
    const elEdit = useRef()

    useEffect(() => {
        if(edit) {
            elEdit.current.focus()
        } else {
            if(!val.trim()) {
                setEdit(true)
            }
        }
    }, [edit])

    return (
        <li className={completed ? 'done' : ''}>
            <div className="view" style={{display: edit ? 'none' : 'block'}}>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={
                        (e) => {
                            changeCompleted(id, e.target.checked)
                        }
                    }
                />
                <label
                    onDoubleClick = {
                        () => {
                            setEdit(true)
                        }
                    }
                >{val}</label>
                <a className="destroy" onClick={() => {remove(id)}}></a>
            </div>
            <input
                className="edit"
                type="text"
                value={val}
                ref={elEdit}
                style={{display: edit ? 'block' : 'none'}}
                onChange={
                    (e) => {
                        changeVal(id, e.target.value.trim())
                    }
                }
                onBlur={
                    () => {
                        setEdit(false)
                    }
                }
            />
        </li>
    )
}

function Main(props) {
    let {todos, changeCompleted, remove, changeVal, changeAllCompleted} = props
    let completed = todos.filter(item => item.completed)

    return (
        <section id="main" style={{display: todos.length ? 'block' : ''}}>
            <input
                id="toggle-all"
                type="checkbox"
                checked={completed.length === todos.length}
                onChange={
                    (e) => {
                        changeAllCompleted(e.target.checked)
                    }
                }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                {
                    todos.map(item => {
                        return (
                            <Li
                                key = {item.id}
                                inner = {item}
                                changeCompleted = {changeCompleted}
                                remove = {remove}
                                changeVal = {changeVal}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Main