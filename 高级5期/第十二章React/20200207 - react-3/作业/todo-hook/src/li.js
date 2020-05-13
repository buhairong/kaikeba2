import React, {useState, useEffect, useRef} from 'react'

function Li(props) {
    let {data, changeDone, changeTxt, remove} = props
    let {id, done, txt} = data
    let [isEdit, setIsEdit] = useState(false)
    let input = useRef()
    useEffect(()=> {
        if(isEdit) {
            input.current.focus()
        }
    }, [isEdit])
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
                                setIsEdit(true)
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
                        ref={input}
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
                                setIsEdit(false)
                            }
                        }
                    />
                </div>
            </div>
        </li>
    )
}

export default Li