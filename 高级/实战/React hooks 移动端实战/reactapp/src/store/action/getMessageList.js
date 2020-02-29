import Http from './http'

function getMessageList(id, page) {
    return function(dispatch) {
        return Http.post(`/lecturer/getcomment?page=${page}&rows=10`, {
            article_id: id
        }).then(res => {
            if(!res.data.length) {
                dispatch({
                    type: 'message_loadend'
                })
                return false
            }
            dispatch({
                type: 'message_loadover',
                messageList: res.data
            })
            return true
        })
    }
}

export default getMessageList