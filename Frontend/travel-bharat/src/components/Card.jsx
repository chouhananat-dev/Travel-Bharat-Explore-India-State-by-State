import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Card = () => {
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState(null);
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const response= await axios.get('http://localhost:5000/api/statesList');
                setdata(response);
                console.log(response);
                setloading(true);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);

    if(!loading){
        return <div className='flex flex-row space-evenly gap-4  mt-4 pb-4 flex-wrap-reverse'>
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
<div class="mx-auto mt-4  w-full max-w-sm rounded-md border border-black p-4">
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
        <div class='p-4 md:p-10 lg:p-20 h-[120vh] bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: "url('https://res.cloudinary.com/degxzalkz/image/upload/v1775909241/photo-1690313186501-445a6367d7e7_hss5rp.jpg')" }}>
            <div class='w-full lg:h-full h-[83vh] md:h-[90vh] bg-black bg-opacity-50 rounded-lg p-6 text-center'>
            <h1 class='lg:text-[5rem] text-3xl md:text-[2.5rem] font-bold text-yellow-500 mb-6 mt-4'>Explore the states of India</h1>
            <div class='w-full h-auto overflow-x-scroll overflow-y-hidden flex gap-6 py-4'>
                {data.data.map((state)=>(
                        <div key={state._id} class='bg-white rounded-2xl shadow-md h-[60vh] w-96 md:w-100 md:h-[75vh] shrink-0 overflow-hidden relative'>
                            <img src={state.image} alt={state.name} class='w-full h-[60vh] md:h-[75vh] object-cover rounded-2xl hover:scale-110 transition duration-300'/>
                            <div class='p-2 backdrop-blur-sm bg-gray-100 bg-opacity-50 rounded-lg mt-[-20vh] mx-6'>
                                <h2 class='text-xl font-bold text-gray-800 mb-2'>{state.name}</h2>
                                <h1 class='text-gray-800'>{state.tagLine}</h1>
                                <Link to='/states' state={state.name}>
                                <button class='mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300'>Explore
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                                </Link>
                            </div>
                            
                        </div>
                    ))}
            </div>
            </div>
        </div>
    )

}
