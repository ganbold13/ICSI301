import React, { ReactNode } from 'react'
import HeadBar from './components/bars/head_bar'
import SideBar from './components/bars/sidebar'
import BottomBar from './components/bars/bottom_bar'

const MyLayout = ({
    user,
    children
}: {
    user: any,
    children: React.ReactNode
}) => {
    return (
        <div>
            <HeadBar />
            <SideBar user={user} />
            <BottomBar user={user} />
            <div className='ins-container'>{children}</div>
        </div>
    )
}

export default MyLayout