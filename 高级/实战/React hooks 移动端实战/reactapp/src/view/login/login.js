import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {withRouter, useHistory} from 'react-router-dom'
import login from '../../store/action/login'
import {useBack} from '../../common/hook'

function LoginBox(props) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [vcode, setVcode] = useState('')
    const [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?' + Date.now())
    let history = useHistory()
    let dispatch = useDispatch()
    const {setDeg} = props
    const back = useBack(history)

    function toLogin() {
        dispatch(login({
            verify: vcode,
            username: user,
            password
        })).then(data => {
            if(data.code !== 0) {
                alert(data.msg)
                setVcodeSrc('/miaov/user/verify?' + Date.now())
            } else {
                back()
            }
        })
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require('../../common/images/user_img.png')} alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={user}
                        onChange={
                            (e) => {
                                setUser(e.target.value)
                            }
                        }
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                    />
                </p>
                <p className="clearfix">
                    <input
                        type="text"
                        placeholder="验证码"
                        value={vcode}
                        className="verifyCode"
                        onChange={
                            (e) => {
                                setVcode(e.target.value)
                            }
                        }
                    />
                    <img className="verify"
                         src={vcodeSrc}
                         onClick={
                             () => {
                                 setVcodeSrc('/miaov/user/verify?' + Date.now())
                             }
                         }
                    />
                </p>
                <button
                    className="form_btn"
                    onClick={toLogin}
                >登录</button>
                <p className="form_tip">没有帐号？<a
                    onClick={() => {
                        setDeg(-180)
                    }}
                >立即注册</a></p>
            </div>
        </div>
    )
}

export default LoginBox

/*
export default connect(res => {
    return res
})(withRouter(LoginBox))
*/
