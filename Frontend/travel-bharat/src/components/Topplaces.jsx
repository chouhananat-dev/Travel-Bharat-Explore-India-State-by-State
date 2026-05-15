import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
export const Topplaces = () => {
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await axios.get('http://localhost:5000/api/topPlaces');
                setdata(response);
                setloading(true);     
            }
            catch(err){
                console.log(err);
            }
        }
        fetchdata()
    },[])
    if(!loading){
        return <div className='flex flex-row space-evenly gap-4 flex-wrap-reverse'>
        <div class="mx-auto mt-4 w-full max-w-sm rounded-md border border-black p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-20 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div class="mx-auto mt-4 w-full max-w-sm rounded-md border border-black p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-20 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div class="mx-auto mt-4 w-full max-w-sm rounded-md border border-black p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-20 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
</div>
    }
  return (
    <div class='bg-gradient-to-r from-[#FF9933] to-[#138808] pt-10 pb-5'>
        <h1 class='lg:text-[5rem] text-3xl md:text-[2.5rem] text-center font-bold text-white mb-6 mt-4'>Top Places to Visit in India</h1>
        <div class='w-full flex flex-col'>
            {data.data.map((place)=>(
                <div key={place.id} class='flex md:flex-row  flex-col justify-between items-center w-full h-auto relative bg-cover bg-center mt-4 mb-4' style={{backgroundImage:`url(${place.image})`}}>
                    <div class='bg-white shadow-md h-96 w-[100%] md:w-96 flex-shrink-0 overflow-hidden relative lg:h-[100vh] lg:w-[120vh] overflow-hidden'>
                        <img src={place.image} alt={place.name} class='w-[100%] md:w-96 h-96 object-cover hover:scale-110 transition duration-300 lg:w-[120vh] lg:h-[100vh] '/>
                    </div>
                    
                        <div class='absolute top-80 lg:top-[560px] left-1/2 transform -translate-x-1/2 lg:left-[50px] lg:transform-none md:top-[310px] md:left-[45px] md:transform-none'>
                            <button class='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 transition duration-300 h-12 w-32 flex items-center justify-center'>
                                Explore
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block ml-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    <div class='p-4 bg-red-800 bg-opacity-75 lg:h-[100vh] h-96 text-center flex flex-col items-center justify-center'>
                        <h2 class='text-3xl lg:text-4xl font-bold text-yellow-500 mb-4 italic'>{place.place}</h2>
                        <h2 class='text-xl lg:text-3xl font-bold text-gray-400 mb-2 italic'>"{place.tagline}"</h2>
                        <p class='text-lg lg:text-xl text-gray-200 text-center bold mt-6'>{place.description}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}
