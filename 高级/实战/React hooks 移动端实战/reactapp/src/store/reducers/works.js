let initData = {
    data: [],
    loading: false,
    loadEnd: false
}

function works(state = initData, action) {
    switch(action.type) {
        case 'load':
            return {
                ...state,
                loading: true
            }
        case 'loadover':
            return {
                ...state,
                loading: false,
                data: state.data.concat(action.data)
            }
        case 'loadend':
            return {
                ...state,
                loadEnd: true
            }
    }
    return state
}

export default works