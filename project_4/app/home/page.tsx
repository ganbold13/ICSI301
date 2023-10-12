'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const home = () => {
  const router = useRouter();

  if (localStorage.getItem("loged") == null){
    router.push('/login')
    return;
  }

  return (
    <div>This is home</div>
  )
}

export default home