import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Description = () => {
    const location = useLocation();
    const {state} = location;
    const [search, setsearch] = useState(false)
  return (
    <div className='bg-gradient-to-r from-[#FF9933] to-[#138808]'>
        <div className='w-full h-[50vh] md:h-[65vh] lg:h-[100vh] bg-cover bg-center flex relative' style={{backgroundImage:`url(${state.image})`}}>
          <Navbar/>
          <div className='text-center rotate-[-90deg] z-50 fixed  right-[-8.3rem] top-[30%]'>
        <Link to='/states'>
            <button onMouseEnter={()=>setsearch(true)} onMouseLeave={()=>setsearch(false)} class='mt-4 w-80 h-10 bg-gradient-to-r from-red-500 to-red-900 text-white text-2xl font-bold italic rounded-t-xl hover:scale-110 transition duration-300'>
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
    <div className='w-1/3 h-auto p-4 bg-red-700 opacity-75 absolute top-[90%] p-4 left-[60%] hidden md:block lg:block'>
        {state.keyPoints.map((point,index)=>(
            <p className='text-white lg:text-lg' key={index} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>{point}</p>
        ))}
    </div>
    <div className='absolute top-[78%]  bg-gradient-to-r from-red-800 bg-opacity-75 p-1 '>
          <h1 className='text-2xl md:text-3xl lg:text-4xl bold text-yellow-400 font-bold italic'>{state.name}</h1>
          <h1 className='text-lg md:text-1xl lg:text-3xl md:mt-2 lg:mt-4 text-red-500 '>{state.state}</h1> 
    </div> 
    </div>
    <div class='p-4 w-full h-auto bg-gradient-to-r from-red-800 to-red-900 text-white mt-4 md:hidden lg:hidden'>
        <h1 class='text-xl font-bold mb-3'>Highlights:</h1>
        {state.keyPoints.map((point,index)=>(
            <p className='text-white lg:text-lg' key={index} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>{point}</p>
        ))}
    </div>
    <div id='description' className='p-4 w-full h-auto bg-gradient-to-r from-red-800 to-red-900 text-white mt-4'>
        <div className='md:w-[60%]'>
        <h1 className='text-2xl mb-3 lg:text-3xl text-yellow-500 font-semibold italic'>About {state.name}</h1>
        <p>{state.description}</p>
        <h1 className='text-xl mt-3 lg:text-2xl text-yellow-500 font-semibold'>Best time to visit</h1>
        <p>{state.bestTimeToVisit}</p>
        </div>
    </div>
    {state.nearByAttractions && (
        <h1 className='text-[2rem] text-center mt-4 text-white font-bold md:text-[2.5rem] lg:text-[3rem]'>NearBy Attractions</h1>
    )}
    <div className='p-4 w-full h-auto bg-gradient-to-r from-red-800 to-red-900 text-white mt-4'>
        {state.nearByAttractions.map((attraction, index) => (
            <div key={index} className='w-full h-auto mt-4 flex flex-col md:flex-row lg:flex-row'>
                <div className='w-full h-96 overflow-hidden mb-3 rounded-lg md:rounded-xl'>
                <img alt='image' src={attraction.image} className='w-full h-96 object-cover  hover:scale-110 transition duration-300'></img>
                </div>
                <div className='w-full h-auto md:ml-4 lg:ml-4 flex flex-col justify-center gap-4 p-8'>
                <h1 className='text-xl md:text-3xl lg:text-[2rem] font-bold mb-2'>{attraction.place}</h1>
                <p>{attraction.description}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
