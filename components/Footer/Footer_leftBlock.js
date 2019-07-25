import React            from 'react'
import Link             from 'next/link'
import { withRouter }   from 'next/router'

const Footer_leftBlock = ({ router: { pathname } }) => (
    <div className="text-center text-lg-left">
        <Link prefetch href='/'>
            <a className={pathname === '/' ? 'is-active' : ''}>
                <img className="logoHeader" src="/static/images/logoFooter.png" />
            </a>
        </Link>
    </div>
)
export default withRouter(Footer_leftBlock)
