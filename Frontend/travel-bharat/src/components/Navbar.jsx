import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Navbar = () => {
  const [isopen, setisopen] = useState(false)
  const links={
    'link1':{ text: 'Home', path: '/' },
    'link2':{ text: 'About', path: '/about' },
    'link3':{ text: 'Contact us', path: '/contact' }
  }
  return (
    <div class="flex justify-between items-center p-4 h-10 w-full bg-gray-900 backdrop-blur-sm bg-opacity-30 md:px-20 md:h-16 fixed top-0 z-50">
        <div>
            <h1 class='text-2xl font-bold text-white inline-block md:text-4xl'>Travel</h1>
            <h1 class='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] inline-block ml-2 md:ml-4 md:text-4xl italic'>Bharat</h1>
        </div>
        <div class='hidden lg:inline-block'>
        <nav class='inline-block w-80 text-lg font-medium text-gray-700 flex justify-between items-center underline underline-offset-8 decoration-2 decoration-yellow-500'>
            {Object.values(links).map((link)=>(
                <Link key={link.path} to={link.path} class='text-white mx-4 hover:text-gray-300 transition duration-300'>{link.text}</Link>
            ))}
        </nav>
        </div>
        <div class='lg:hidden'>
          <button onClick={()=>setisopen(!isopen)} class='text-white focus:outline-none'>
            {isopen ? (
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path></svg>
            ) : (
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'></path></svg>
            )}
          </button>
          {isopen && (
            <nav class='absolute top-16 right-4 bg-gray-900 backdrop-blur-sm bg-opacity-30  rounded-lg w-40 text-center h-60 flex flex-col gap-6 justify-center md:top-20 md:right-20'>
              {Object.values(links).map((link)=>(
                <Link key={link.path} to={link.path} class='block text-yellow-500 font-bold text-xl py-2 hover:text-yellow-300 transition duration-500 hover:bg-gray-100 hover:bg-opacity-40'>{link.text}</Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    )
}
