import React from 'react'
import MyLayout from '../my_layout'
import { data } from '../static/example_data'

const Reels = () => {
    return (
        <MyLayout user={data.loginUser}>
            <div>Reels</div>
        </MyLayout>
    )
}

export default Reels