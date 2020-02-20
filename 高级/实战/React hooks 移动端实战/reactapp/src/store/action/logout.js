import Http from './http'

function loginOut() {
    return function(dispatch) {
        return Http.post('/user/logout')
            .then(res => {
                if(res.data.code === 0) {
                    dispatch({
                        type: 'logout'
                    })
                }
            })
    }
}

export default loginOut