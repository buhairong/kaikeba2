import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getGood, setGood, cancelGood} from '../../store/action/good'

function Good(props) {
    let {goodNum, id} = props
    let [count, setCount] = useState(goodNum)
    let {good, goodId} = useSelector(state => state.good)
    let user = useSelector(state => state.getUser)
    let dispatch = useDispatch()
    let history = useHistory()
    let point = {}
    useEffect(() => {
        dispatch(getGood(id))
    }, [user])

    return (
        <p className="miiaov_zan">
            <span>有{count}人学的很赞</span>
            <span
                className={`iconfont icon-tuijian1 ${good ? 'good' : ''}`}
                onTouchStart={(e) => {
                    let touch = e.changedTouches[0]
                    point.x = touch.pageX
                    point.y = touch.pageY
                }}
                onTouchEnd={(e) => {
                    let touch = e.changedTouches[0]
                    let nowTouch = {
                        x: touch.pageX,
                        y: touch.pageY
                    }
                    if(Math.abs(nowTouch.x - point.x) < 5 && Math.abs(nowTouch.y - point.y) < 5) {
                        if(user) {
                            if(good) {
                                dispatch(cancelGood(id,goodId))
                                    .then(res => {
                                        setCount(--count)
                                    })
                            } else {
                                dispatch(setGood(id))
                                    .then(res => {
                                        setCount(++count)
                                    })
                            }
                        } else {
                            history.push('/login')
                        }
                    }
                }}
            />
        </p>
    )
}

export default Good