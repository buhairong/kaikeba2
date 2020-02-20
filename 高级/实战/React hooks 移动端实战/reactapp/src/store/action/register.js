import Http from './http'

function register(data) {
    return function(dispatch) {
        return Http.post('/user/register', data)
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

export default register