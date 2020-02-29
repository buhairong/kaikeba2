import React, {useEffect, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import Frame from '../../common/component/frame'
import getWork from '../../store/action/getWork'
import getMessageList from '../../store/action/getMessageList'
import Skeleton from '../../common/component/skeleton'
import Tab from '../../common/component/tab'
import Main from './main'
import '../../common/css/miiaov.css'

function Work(props) {
    let {data, loading} = useSelector(state => state.work)
    let dispatch = useDispatch()
    let params = useParams()
    let {id} = params
    let {page} = useSelector(state => state.messageList)

    /*
        useMemo: 组件挂载之前
        useEffect: 组件挂载、更新之后
    */
    useEffect(() => {
        dispatch(getWork(id))
        dispatch(getMessageList(id, page))
        return () => { // 组件卸载时调用
            dispatch({
                type: 'work_reset'
            })
            dispatch({
                type: 'message_reset'
            })
        }
    }, [])

    return (
        <div>
            <Frame>
                {
                    loading ? <Skeleton /> : (<Main
                        data = {data}
                    />)
                }
            </Frame>
            <footer className="miiapv_footer">
                回复本帖
            </footer>
        </div>
    )
}

export default Work