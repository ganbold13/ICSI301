'use client'
import React, { useEffect } from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("loged") !== null) {
      router.push('/home');
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
       <Link href='/login' className="primaryButton">Sing In</Link>
       <Link href='./register' className="secondaryButton">Sing Up</Link>
    </div>
  )
}

export default Home