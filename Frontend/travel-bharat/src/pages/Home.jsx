import React from 'react'
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Topplaces } from '../components/Topplaces';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../components/Footer';
export const Home = () => {
  const [search, setsearch] = useState(false)
  return (
    <div id='main_div' class='w-screen '>
      <video class='w-full h-full object-cover' autoPlay loop muted>
          <source src='https://res.cloudinary.com/degxzalkz/video/upload/v1775912464/Untitled_design_cjaeyr.mp4' type='video/mp4'/>
        </video>
      <div id='wallpaper_div' class='w-full lg:h-[41.5rem] h-96'>
        
      <div class='absolute top-[-21rem] w-full h-full  flex flex-col items-center justify-center'>
      <Navbar/>
      <div class='flex lg:flex-row '>
      <div class='mt-[17rem] ml-[-13rem] text-4xl font-bold text-white md:text-3xl gap-2 md:gap-4 lg:gap-6 lg:ml-[-40rem] lg:mt-[60rem] flex flex-col lg:mt-[15rem] md:ml-[-24rem] md:mt-[36rem] text-left' data-aos='fade-up'>
        <h1 class='text-3xl md:text-5xl' data-aos='fade-up'>Explore</h1>
        <h1 class='md:text-5xl lg:text-[6rem] text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] via-white to-[#138808]'>India</h1>
        <h1 class='text-3xl md:text-5xl text-white'>state by state</h1>
      </div>
      </div>
      </div>
      <div class='text-center -rotate-90 z-50 fixed -right-34 top-[30%]'>
        <Link to='/states'>
            <button onMouseEnter={()=>setsearch(true)} onMouseLeave={()=>setsearch(false)} class='mt-4 w-80 h-10 bg-linear-to-r from-red-500 to-red-900 text-white text-2xl font-bold italic rounded-t-xl hover:scale-110 transition duration-300'>
                <div class='flex flex-row items-center justify-center transition duration-900'>
                {search && (
                    <p>Search</p>
                )
                }
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
            </button>
        </Link>
    </div>
      <Topplaces/>
      <Card/>
      
      <div class='pb-5 bg-linear-to-r from-[#FF9933] to-[#138808]'>
        <h1 class='text-4xl md:text-6xl lg:text-[5rem] mb-4 pt-4 font-bold text-white text-center'>More Attractions</h1>
      <div class='h-[23rem] flex flex-col justify-center items-center bg-[url("https://res.cloudinary.com/degxzalkz/image/upload/v1775576053/1000_F_505512599_D6ulJI9hV6aGTP04FPC2XDk5QHGOQtpW_waps52.jpg")] bg-cover bg-center'>
        <h1 class='text-4xl font-bold text-white italic mb-4'>"India is incredible! Click here to explore more."</h1>
        <Link to='/states'>
        <button class='mt-4 px-20 py-6 bg-gradient-to-r from-[#FF9933] to-[#138808] text-white text-2xl font-bold italic rounded-full hover:scale-110 transition duration-300'>Explore
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
        </Link>
      </div>
      </div>
      <Footer/>
    </div>
      
    </div>
  )
}
