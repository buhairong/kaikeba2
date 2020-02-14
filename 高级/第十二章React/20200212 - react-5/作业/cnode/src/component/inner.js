import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import getData from '../http'
import List from './list'
import FooterNav from './footerNav'

function Inner() {
    let {type, page} = useParams()
    let [data, setData] = useState([])
    let [isLoad, setLoad] = useState(true)

    useEffect(() => {
        if(isLoad) {
            getData(type, page).then((res) => {
                setData(res.data.data)
                setLoad(false)
            })
        }
    }, [isLoad])

    useEffect(() => {
        setLoad(true)
    }, [type, page])

    return (
        <div>
            {
                isLoad
                    ? <p>请求数据中...</p>
                    : (
                        <Fragment>
                            <List data={data} />
                            <FooterNav/>
                        </Fragment>
                    )
            }
        </div>
    )
}

export default Inner