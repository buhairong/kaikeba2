import React, {useState, useEffect, useRef} from 'react'
import BScroll from 'better-scroll'
import Header from './header'
import Menu from './menu'
import {useInnerHeight} from '../hook'
import '../css/reset.css'
import '../css/common.css'

function Frame(props) {
    const [showMenu, setShowMenu] = useState(false)
    const innerH = useInnerHeight()
    const {pullUp, getData} = props
    let wrap = useRef(null)

    function changeShow() {
        setShowMenu(!showMenu)
    }

    function menuHide() {
        setShowMenu(false)
    }

    useEffect(() => {
        let pageScroll = new BScroll(wrap.current, {
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp ? {
                threshold: 200
            } : false
        })
        pageScroll.on('pullingUp', () => {
            getData().then(res => {
                if(res) {
                    pageScroll.finishPullUp()
                    pageScroll.refresh()
                } else {
                    pageScroll.closePullUp()
                }
            })
        })
    }, [])

    return (
        <div>
            <Header
                changeShow = {changeShow}
            />
            <Menu
                menuHide = {menuHide}
            />
            <div
                id="main"
                style={{
                    transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
                    height: innerH
                }}
                onTouchStart={menuHide}
            >
                <div
                    className="pageWrap"
                    ref={wrap}
                >
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame