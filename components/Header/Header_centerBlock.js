import React            from 'react'
import Link             from 'next/link'
import { withRouter }   from 'next/router'
 
const Header_centerBlock = ({ router: { pathname } }) => (
    <div className="text-center">
        <Link prefetch href='/'>
            <a className={pathname === '/' ? 'is-active' : ''}>
                <img className="logoHeader" src="/static/images/logo-new.png" />
            </a>
        </Link>
    </div>
)
export default withRouter(Header_centerBlock)