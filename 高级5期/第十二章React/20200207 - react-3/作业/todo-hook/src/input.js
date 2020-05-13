import React, {useState} from 'react'

function Input(props) {
    let [val, setVal] = useState('')
    let {add} = props
    return (
        <div id="create-todo">
            <input
                type="text"
                id="new-todo"
                placeholder="What needs to be done?"
                autoComplete="false"
                value={val}
                onChange={
                    ({target}) => {
                        setVal(target.value)
                    }
                }
                onKeyDown={
                    ({keyCode}) => {
                        if(keyCode === 13) {
                            if(val.trim()) {
                                add(val.trim())
                                setVal('')
                            }else {
                                alert('输入点内容吧')
                            }
                        }
                    }
                }
            />
        </div>
    )
}

export default Input