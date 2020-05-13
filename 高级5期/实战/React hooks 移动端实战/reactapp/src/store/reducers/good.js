function Good(state = {
    good: false,
    goodId: null
}, action) {
    switch(action.type) {
        case 'good':
            return {
                good: true,
                goodId: action.goodId
            }
        case 'cancel_good':
            return {
                ...state,
                good: false
            }
    }

    return state
}

export default Good