import axios from 'axios'

axios.interceptors.request.use(config => {
    console.log(config)
    if(config.url === '/api/login') return config
    if(config.url === '/api/reg') return config
    if(config.url === '/api/getItems') return config

    const token = localStorage.getItem('token')
    if(token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
})

axios.withCredentials = true

export default axios