import React from 'react'

function List(props) {
    let {data} = props
    return (
        <div>
            {
                data.map(item => {
                    return (
                        <div key = {item.id}>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List