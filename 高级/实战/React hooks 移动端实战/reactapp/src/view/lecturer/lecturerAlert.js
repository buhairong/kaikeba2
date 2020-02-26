import React, {useEffect, useRef} from 'react'
import BScroll from 'better-scroll'

function LecturerAlert(props) {
    let {data, hideAlert} = props
    let wrap = useRef(null)

    useEffect(() => {
        let bscroll = new BScroll(wrap.current, {
            scrollbar: true
        })
    }, [])

    return (
        <aside
            className="elastic"
            onClick={hideAlert}
        >
            <div className="elastic_box">
                <span
                    className="close"
                    onClick={hideAlert}
                >关闭</span>
                <div className="elastic_img">
                    <img src={data.icon} alt="" />
                </div>
                <div className="elastic_txt">
                    <h3>{data.title}-妙味课堂 全职讲师</h3>
                    <div className="elastic_content" ref={wrap}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.content
                            }}
                        />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default LecturerAlert