import React from 'react'
import {useParams, Link} from 'react-router-dom'

function FooterNav() {
    let {type, page} = useParams()
    let pageLen = 10
    let pageStart = page - 5
    pageStart = pageStart < 1 ? 1 : pageStart
    pageStart--
    return (
        <nav className="pageNav">
            {
                [...('.').repeat(pageLen)].map(item => {
                    pageStart++
                    if(page == pageStart) {
                        return <span key={pageStart}>{pageStart}</span>
                    }
                    return <Link key={pageStart} to={`/${type}/${pageStart}`}>{pageStart}</Link>
                })
            }
        </nav>
    )
}

export default FooterNav