import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function GoodList() {
    let data = useSelector(state => {
        return state.data
    })
    let dispatch = useDispatch()
    return (
        <ul>
            {
                data.map(item => {
                    return <li
                        key = {item.id}
                    >
                        {item.shopName} -
                        {item.price*1}元/件 -
                        共
                        <button
                            onClick={
                                () => {
                                    let changeNum = --item.num
                                    changeNum = changeNum >= 0 ? changeNum : 0
                                    dispatch({
                                        type: 'edit_good',
                                        good: {
                                            id: item.id,
                                            num: changeNum
                                        }
                                    })
                                }
                            }
                        >-</button>
                        {item.num}
                        <button
                            onClick={
                                () => {
                                    dispatch({
                                        type: 'edit_good',
                                        good: {
                                            id: item.id,
                                            num: ++item.num
                                        }
                                    })
                                }
                            }
                        >+</button>
                        -
                        共 {item.price * item.num} 元
                    </li>
                })
            }
        </ul>
    )
}

export default GoodList