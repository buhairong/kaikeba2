function messageList(state = {
    messageList: [],
    page: 1,
    loading: false,
    loadEnd: false
}, action) {
    switch(action.type) {
        case 'message_load':
            return {
                ...state,
                loading: true
            }
        case 'message_loadover':
            return {
                ...state,
                loading: false,
                page: ++state.page,
                messageList: state.messageList.concat(action.messageList)
            }
        case 'message_loadend':
            return {
                ...state,
                loadEnd: true
            }
        case 'message_reset':
            return {
                messageList: [],
                loading: false,
                loadEnd: false,
                page: 1
            }
    }
    return state
}

export default messageList