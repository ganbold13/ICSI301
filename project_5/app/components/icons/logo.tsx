import React from 'react'
import Image from "next/image";
import logo from '../../static/images/logo.png'

const Logo = (props:any) => {
  return (
    <Image
            src={logo}
            alt="Logo of Instagram"
            width={103}
            height={29}
            {...props}
          />
  )
}

export default Logo