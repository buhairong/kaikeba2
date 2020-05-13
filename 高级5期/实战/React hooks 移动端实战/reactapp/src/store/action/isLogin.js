import Http from './http'

function isLogin() {
    return function(dispatch) {
        return Http.post('/user/isLogin')
            .then(res => {
                if(res.data.code === 0) {
                    dispatch({
                        type: 'login',
                        user: res.data.username
                    })
                }
            })
    }
}

export default isLogin