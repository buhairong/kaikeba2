import React, {useState} from 'react'
import LoginBox from './login'
import Register from './register'
import Frame from '../../common/component/frame'
import '../../common/css/login.css'

function Login() {
    const [deg, setDeg] = useState(0)
    return (
        <Frame>
            <div id="login_boxWrap">
                <h2 className="login_register"><span>登录&注册</span></h2>
                <div className="login_register_box">
                    <div
                        className="box"
                        style={{
                            transform: `rotateY(${deg}deg)`
                        }}
                    >
                        <LoginBox setDeg={setDeg} />
                        <Register setDeg={setDeg} />
                    </div>
                </div>
            </div>
        </Frame>
    )
}

export default Login