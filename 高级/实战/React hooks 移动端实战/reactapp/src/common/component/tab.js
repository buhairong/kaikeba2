import React, {useEffect, useRef, useState} from 'react'
import BScroll from 'better-scroll'

function Tab(props) {
    let {data, render} = props
    let bannerWrap = useRef(null)
    let bScroll = null
    let [now, setNow] = useState(0)

    useEffect(() => {
        let timer = 0
        bScroll = new BScroll(bannerWrap.current,{
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical", // 横向滑屏时，同时不影响纵向滑屏
            momentum: false, // 去除惯性，滑一次只移动一张图片
            snap:{
                loop: true // 开启无缝滑屏
            }
        })
        bScroll.on("scrollEnd",()=>{
            setNow(bScroll.getCurrentPage().pageX);
        })
        timer = setInterval(() => {
            bScroll.next(200)
        }, 2000)
    }, [])

    return (
        <div className="banner">
            <div className="banner_img" ref={bannerWrap}>
                <ul className="banner_list clearfix">
                    {
                        data.map((item, index) => <li key={index}>{render(item)}</li>)
                    }
                </ul>
            </div>
            {
                data.length ? (
                    <ul className="banner_nav">
                        {
                            data.map((item, index) => <li key={index} className={index === now ? 'active' : ''} />)
                        }
                    </ul>
                ) : ''
            }
        </div>
    )
}

export default Tab