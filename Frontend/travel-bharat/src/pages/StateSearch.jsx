import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import {Navbar} from '../components/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
export const StateSearch = () => {
    const location = useLocation();
    const {state} = location;
    const [loading, setloading] = React.useState(true);
    const [State, setState] = React.useState("Uttar Pradesh");
    const [places, setPlaces] = React.useState([]);
    useEffect(()=>{
      const fetchdata = async()=>{
        try{
          if (state){
            setState(state);
          }
          const response = await axios.get(`http://localhost:5000/api/states/${State}`);
          setloading(false);
          setPlaces(response.data);
          setloading(false);
          console.log(response.data);
        }
        catch(err){
          console.log(err);
        }
      }
      if (State){
        fetchdata();
      }
    },[state,State])
    const selectSearch = async(e) => {
      e.preventDefault();
      setloading(true);
      try{
        const response = await axios.get("http://localhost:5000/api/getStatesInfo",{
          params:{
            statename:e.target.statename.value,
            category:e.target.category.value
          }
        });
        setPlaces(response.data);
        setloading(false)
      }
      catch(err){
        console.log(err);
      }
    }
  return (
    <div id='main_div' class='bg-linear-to-r from-[#FF9933] to-[#138808]'>
      <div id='search_box' class='bg-cover bg-center h-120 flex flex-row items-center justify-center lg:p-40 md:p-8 p-4' style={{backgroundImage:'url("https://res.cloudinary.com/degxzalkz/image/upload/v1776784522/photo-1629735919597-fed920b5bd84_z5esqe.jpg")'}}>
        <Navbar/>
        <div class='bg-black p-8 rounded-tr-[3rem] rounded-bl-[3rem] text-center h-80 mt-12 w-full flex flex-col items-center justify-center opacity-80 transition duration-300'>
        <form onSubmit={selectSearch} class='flex flex-col items-center justify-center gap-4'> 
          <select name='statename' class='w-full mb-4 p-2 rounded-lg bg-gray-100 bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-200 transition duration-300 md:w-md lg:w-140'>
              <option value=''>Choose States and Union Territories</option>
              <option value='Andhra Pradesh'>Andhra Pradesh</option>
              <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
              <option value='Assam'>Assam</option>
              <option value='Bihar'>Bihar</option>
              <option value='Chhattisgarh'>Chhattisgarh</option>
              <option value='Goa'>Goa</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Haryana'>Haryana</option>
              <option value='Himachal Pradesh'>Himachal Pradesh</option>
              <option value='Jharkhand'>Jharkhand</option>
              <option value='Karnataka'>Karnataka</option>
              <option value='Kerala'>Kerala</option>
              <option value='Madhya Pradesh'>Madhya Pradesh</option>
              <option value='Maharashtra'>Maharashtra</option>
              <option value='Manipur'>Manipur</option>
              <option value='Meghalaya'>Meghalaya</option>
              <option value='Mizoram'>Mizoram</option>
              <option value='Nagaland'>Nagaland</option>
              <option value='Odisha'>Odisha</option>
              <option value='Punjab'>Punjab</option>
              <option value='Rajasthan'>Rajasthan</option>
              <option value='Sikkim'>Sikkim</option>
              <option value='Tamil Nadu'>Tamil Nadu</option>
              <option value='Telangana'>Telangana</option>
              <option value='Tripura'>Tripura</option>
              <option value='Uttar Pradesh'>Uttar Pradesh</option>
              <option value='Uttarakhand'>Uttarakhand</option>
              <option value='West Bengal'>West Bengal</option>
            
              <option value='Andaman and Nicobar Islands'>Andaman and Nicobar Islands</option>
              <option value='Chandigarh'>Chandigarh</option>
              <option value='Dadra and Nagar Haveli and Daman and Diu'>Dadra and Nagar Haveli and Daman and Diu</option>
              <option value='Delhi'>Delhi</option>
              <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
              <option value='Ladakh'>Ladakh</option>
              <option value='Lakshadweep'>Lakshadweep</option>
              <option value='Puducherry'>Puducherry</option>
          </select>
          <select name='category' class='w-full mb-4 p-2 rounded-lg bg-gray-100 bg-opacity-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-200 transition duration-300 md:w-md lg:w-140'>
            <option value=''>Choose Category</option>
            <option value='pilgrimage'>Pilgrimage</option>
            <option value='heritage'>Heritage</option>
            <option value='hill station'>Hill Station</option>
            <option value='historical'>Historical</option>
            <option value='nature'>Nature</option>
            <option value='monumental'>Monumental</option>
          </select>
          <button type='submit' class='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 hover:scale-110'>Search
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </form>
      </div>
      </div>
      <div class='bg-linear-to-r from-[#FF9933] to-[#138808]'>
        {!loading ? places.map((place) => (
          <div key={place.id} class='bg-cover bg-center flex flex-col items-center justify-center lg:flex-row mt-4' style={{backgroundImage: `url(${place.image})`}}>
            <div class='w-full h-80 md:h-100 lg:w-1/2screen  overflow-hidden transition duration-300 relative'>
              <img src={place.image} alt={place.name} class='w-full h-full object-cover hover:scale-110 transition duration-300' />
              <Link to='/states/description' state={place}>
                <button class='absolute top-[85%] left-[5%] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full hover:scale-110 transition duration-300'>
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </Link>
            </div>
            <div class='w-full h-auto md:h-auto lg:h-100 p-4 bg-red-800 bg-opacity-75'>
              <h3 class='text-3xl font-bold text-yellow-500'>{place.name}</h3>
              <h3 class='text-xl font-semibold text-gray-300'>{place.state}</h3>
              <p class='text-white text-lg italic font-semibold'>{place.category}</p>
              <div>
                {place.keyPoints.slice(0,2).map((point, index)=>(
                  <p key={index} class='text-white italic mt-2'>{point}</p>
                ))}
              </div>
              <div class='flex flex-row items-center space-between gap-4 mt-4'>
                {place.nearByAttractions.slice(0,3).map((attraction, index)=>(
                  <>
                  <div key={index} class='overflow-hidden rounded-full'>
                    <img src={attraction.image} alt={attraction.name} class='w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-full hover:scale-110 transition duration-300' />
                  </div>
                  </>
                ))}
                <div class='bg-gray-400 p-2 rounded-full w-20 h-20 lg:w-40 lg:h-40 flex justify-center items-center text-sm text-gray-800 hover:bg-gray-300 transition duration-300'>
                    <h1>more...</h1>
                  </div>
              </div>
            </div>
          </div>
        )
        ):<div className='flex flex-col space-evenly gap-4  mt-4 pb-4'>
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
      </div>
    </div>
  )
}
