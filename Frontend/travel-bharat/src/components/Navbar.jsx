import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Navbar = () => {
  const [isopen, setisopen] = useState(false)
  const links={
    'link1':{ text: 'Home', path: '/' },
    'link4':{text:'Admin Login', path:'/admin/login'}
  }
  return (
    <div class="flex justify-between items-center p-4 h-10 w-full md:px-20 md:h-16 fixed top-0 z-50">
        <div>
            <h1 class='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] via-white to-[#138808]  inline-block md:text-4xl'>Travel</h1>
            <h1 class='text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] via-white to-[#138808] inline-block ml-2 md:ml-4 md:text-4xl italic'>Bharat</h1>
        </div>
        <div class='hidden lg:inline-block'>
        <nav class='w-80 flex text-xl font-semibold justify-between items-center underline underline-offset-8 decoration-2 decoration-yellow-500'>
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
            <nav class='absolute top-16 right-4 bg-linear-to-r border-2 border-gray-300  underline underline-offset-8 decoration-1 decoration-yellow-500 rounded-lg w-40 text-center h-30 flex flex-col justify-evenly md:top-20 md:right-20'>
              {Object.values(links).map((link)=>(
                <Link key={link.path} to={link.path} class='block text-white font-semibold text-xl py-2  transition duration-500 hover:bg-gray-400 hover:rounded-lg'>{link.text}</Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    )
}
