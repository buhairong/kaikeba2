import React from 'react'
import {useSelector} from 'react-redux'

function Total() {
    let data = useSelector(state => {
        return state.data
    })
    let len = data.length
    let total = 0
    let totalNum = 0
    let max = 0
    data.forEach(item => {
        total+= item.price * item.num
        totalNum+= item.num
        if(item.num > 0){
            max = item.price*1 > max ? item.price*1 : max
        }
    })

    return (
        <div style={{
            display: totalNum ? 'block' : 'none'
        }}>
            总计：{totalNum}件商品,
            共计花费{total}元
            最贵单价为{max}元
        </div>
    )
}

export default Total