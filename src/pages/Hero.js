import React from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    <div>
        <Link href="/" className="text-3xl bg-green-500 text-amber-700 px-[20px] py-[10px] items-center m-5 rounded-lg">Link</Link>
        <Link href='/Hero' className="ml-5">Go to Hero</Link>
        <Link href="/Login" className="ml-5">Go To Login</Link>
        <Link href="/Contact" className="ml-5">Go to Contact</Link>
        <div className="flex flex-col justify-center items-center m-9">
          <h1 className="text-3xl mb-6">Welcome to the Hero Section</h1>
          <h2 className="text-2xl">Please apply anything here</h2>
        </div>
      </div>
  )
}

export default Hero