// 'use client'
import React from "react"
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
       <Link href='/login' className="primaryButton">Sing In</Link>
       <Link href='./register' className="secondaryButton">Sing Up</Link>
    </main>
  )
}
