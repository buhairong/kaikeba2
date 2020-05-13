import React from 'react'
import Tab from '../../common/component/tab'

function LecturerTab(props) {
    let {data, newData, showAlert} = props
    return (data.length ? <Tab
        data = {newData}
        render = {
            (data) => {
                return (
                    <ul className="lecturer_list">
                        {
                            data.map(item => {
                                let point = {}
                                return (
                                    <li
                                        key={item.id}
                                        onTouchStart={(e) => {
                                            let touch = e.changedTouches[0]
                                            point.x = touch.pageX
                                            point.y = touch.pageY
                                        }}
                                        onTouchEnd={(e) => {
                                            let touch = e.changedTouches[0]
                                            let nowTouch = {
                                                x: touch.pageX,
                                                y: touch.pageY
                                            }
                                            if(Math.abs(nowTouch.x - point.x) < 5 && Math.abs(nowTouch.y - point.y) < 5) {
                                                showAlert(item)
                                            }
                                        }}
                                    >
                                        <img src={item.icon} />
                                        <p>{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        }
    /> : null)
}

export default LecturerTab