import Http from './http'

function login(data) {
    return function(dispatch) {
        return Http.post('/user/login', data)
            .then(res => {
                if(res.data.code === 0) {
                    dispatch({
                        type: 'login',
                        user: data.username
                    })
                }
                return res.data
            })
    }
}

export default login