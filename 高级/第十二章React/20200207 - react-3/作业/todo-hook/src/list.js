import React, {useEffect} from 'react'
import Li from './li'

function List(props) {
    let {data, changeDone, changeTxt, remove} = props
    return (
        <ul id="todo-list">
                {
                    data.map(item => {
                        return (
                            <Li
                                key={item.id}
                                data={item}
                                changeDone={changeDone}
                                changeTxt={changeTxt}
                                remove={remove}
                            />
                        )
                    })
                }
            </ul>
    )
}

export default List