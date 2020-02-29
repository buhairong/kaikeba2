import React from 'react'

function MessageList() {
    return (
        <ul className="comment_list">
            <li>
                <div className="user_comment clearfix">
                    <img src="images/comment_photo.png" alt="" />
                        <span>雯雯</span>
                </div>
                <div className="comment_txt">
                    作品很棒，希望自己也能做出这么好的作品
                </div>
                <div className="comment_footer">
                    <time>17分钟前</time>
                    <button>编辑</button>
                </div>
                <ul className="comment_list recomment">
                    <li>
                        <div className="user_comment clearfix">
                            <img src="images/comment_photo.png" alt="" />
                                <span>wowo</span>
                        </div>
                        <div className="recomment_txt">
                            回复 <span>雯雯</span>:
                            <span>一起加油</span>
                        </div>
                        <div className="comment_footer">
                            <time>17分钟前</time>
                            <button>编辑</button>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default MessageList