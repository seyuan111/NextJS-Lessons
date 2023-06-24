import React from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Contact = () => {
  return (
    <div>
    <Link href="/" className="text-3xl bg-green-500 text-amber-700 px-[20px] py-[10px] items-center m-5 rounded-lg">Link</Link>
    <Link href='/Hero' className="ml-5">Go to Hero</Link>
    <Link href="/Login" className="ml-5">Go To Login</Link>
    <Link href="/Contact" className="ml-5">Go to Contact</Link>
        <div className="text-center flex flex-col justify-center items-center m-9">
            <h1 className="text-3xl">Contact goes here</h1>
            <h2 className="text-2xl">Contact us at:</h2>
            <p>555-111-2222</p>
        </div>
    </div>
  )
}

export default Contact