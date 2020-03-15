import axios from 'axios';

export default '这是a模块!';

export const fn = async () => {
    // console.lo('fn');
    let rs = await axios({
        // url: 'http://localhost:7777'
        url: '/api'
    });

    console.log(rs);
};