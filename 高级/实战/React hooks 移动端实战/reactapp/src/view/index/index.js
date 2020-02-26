import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Frame from '../../common/component/frame'
import Tab from '../../common/component/tab'
import Course from './course'
import Vip from './vip'
import Miaov from './miaov'
import Works from './works'
import getWorks from '../../store/action/getWorks'
import '../../common/css/index.css'

let imgData = [
    require('../../common/images/tab/img1.png'),
    require('../../common/images/tab/img2.png'),
    require('../../common/images/tab/img3.png'),
    require('../../common/images/tab/img4.png')
]

function Index(props) {
    let [page, setPage] = useState(1)
    let dispatch = useDispatch()
    let works = useSelector(state => state.works)

    function getWorksData() {
        let p = dispatch((getWorks(page)))
        setPage(++page)
        return p
    }

    useEffect(() => {
        getWorksData()
    }, [])

    return (
        <Frame
            pullUp = {true}
            getData = {getWorksData}
        >
            <Tab
                data = {imgData}
                render = {(data) => {
                    return <img src={data} />
                }}
            />
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
                <Works />
            </section>
        </Frame>
    )
}

export default Index