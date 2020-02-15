import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function AddGood() {
    let [goodName, setGoodName] = useState('')
    let [price, setPrice] = useState(0)
    let dispatch = useDispatch()
    return (
        <div>
            添加商品：
            <input
                type="text"
                id="shopName"
                placeholder="商品名称"
                autoComplete="off"
                value={goodName}
                onChange={
                    (e) => {
                        setGoodName(e.target.value.trim())
                    }
                }
            />
            <input
                type="number"
                id="price"
                autoComplete="off"
                value={price}
                onChange={
                    (e) => {
                        setPrice(e.target.value.trim())
                    }
                }
            />
            <button
                onClick={
                    () => {
                        if(!goodName) {
                            alert('请输入商品名称')
                        } else if (!price) {
                            alert('请输入商品价格')
                        } else {
                            dispatch({
                                type: 'add_good',
                                good: {
                                    id: Date.now(),
                                    shopName: goodName,
                                    price: price,
                                    num: 0
                                }
                            })
                            setGoodName('')
                            setPrice(0)
                        }
                    }
                }
            >添加</button>
        </div>
    )
}

export default AddGood