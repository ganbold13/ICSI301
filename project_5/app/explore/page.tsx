import React from 'react'
import MyLayout from '../my_layout'
import { data } from '../static/example_data'

const Explore = () => {
  return (
    <MyLayout user={data.loginUser}>
            <div>Explore</div>
        </MyLayout>
  )
}

export default Explore