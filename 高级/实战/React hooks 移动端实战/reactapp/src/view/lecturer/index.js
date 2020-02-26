import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Frame from '../../common/component/frame'
import getLecturer from '../../store/action/getLecturer'
import LecturerTab from './tab'
import Join from './join'
import Footer from './footer'
import LecturerAlert from './lecturerAlert'
import '../../common/css/teacher.css'

function Lecturer() {
    const [show, setShow] = useState(false)
    const [alertData, setAlertData] = useState(null)
    let dispatch = useDispatch()
    let data = useSelector(state => state.lecturer)
    let newData = []

    function showAlert(data) {
        setAlertData(data)
        setShow(true)
    }

    function hideAlert() {
        setShow(false)
    }

    for(let i=0; i<data.length; i+=3) {
        let newArr = []
        data[i] && newArr.push(data[i])
        data[i+1] && newArr.push(data[i+1])
        data[i+2] && newArr.push(data[i+2])
        newData.push(newArr)
    }

    useEffect(() => {
        dispatch(getLecturer())
    }, [])

    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <LecturerTab
                        data = {data}
                        newData = {newData}
                        showAlert = {showAlert}
                    />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show ? <LecturerAlert
                data = {alertData}
                hideAlert = {hideAlert}
            /> : null}
        </div>
    )
}

export default Lecturer