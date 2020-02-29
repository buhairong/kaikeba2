import React from 'react'
import {useSelector} from 'react-redux'

function MessageList() {
    let {messageList} = useSelector(state => state.messageList)
    console.log(messageList)

    return (
        <ul className="comment_list">
            {
                messageList.map(item => {
                    return (
                        <li key = {item.create_time}>
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