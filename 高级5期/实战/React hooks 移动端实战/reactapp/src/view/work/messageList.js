import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import getMessageList from '../../store/action/getMessageList'

function MessageList(props) {
    let {id} = props
    let {messageList, page} = useSelector(state => state.messageList)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMessageList(id, page))

        return () => { // 组件卸载时调用
            dispatch({
                type: 'message_reset'
            })
        }
    }, [])

    return (
        <ul className="comment_list">
            {
                messageList.map((item, index) => {
                    return (
                        <li key = {index}>
                            <div className="user_comment clearfix">
                                <span>{item.username}</span>
                            </div>
                            <div className="comment_txt">
                                {item.content}
                            </div>
                            <div className="comment_footer">
                                <time>17分钟前</time>
                                <button>编辑</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MessageList