'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import Cookies from 'js-cookie';

const home = () => {
  const router = useRouter();

  if (Cookies.get("loged") == null){
    router.push('/login')
    return;
  }

  return (
    <div>This is home</div>
  )
}

export default home