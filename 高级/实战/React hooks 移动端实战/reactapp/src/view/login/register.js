import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'
import {withRouter, useHistory} from 'react-router-dom'
import register from '../../store/action/register'
import {useBack} from '../../common/hook'

function RegisterBox(props) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [vcode, setVcode] = useState('')
    const [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?' + Date.now())
    let history = useHistory()
    let dispatch = useDispatch()
    const {setDeg} = props
    const back = useBack(history)

    function toRegister() {
        dispatch(register({
            verify: vcode,
            username: user,
            password,
            repassword: password2
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
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
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
                <p>
                    <input
                        type="password"
                        placeholder="请确认密码"
                        value={password2}
                        onChange={
                            (e) => {
                                setPassword2(e.target.value)
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
                    onClick={toRegister}
                >马上注册</button>
                <p className="form_tip">已有帐号？<a
                    onClick={() => {
                        setDeg(0)
                    }}
                >立即登录</a></p>
            </div>
        </div>
    )
}

export default RegisterBox

/*
export default connect(res => {
    return res
})(withRouter(LoginBox))
*/
