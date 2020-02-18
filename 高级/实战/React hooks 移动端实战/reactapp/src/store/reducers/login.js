function getUser(state = '', action) {
    switch(action.type) {
        case 'login':
            return action.user
        case 'logout':
            return ''
    }
    return state
}

export default getUser