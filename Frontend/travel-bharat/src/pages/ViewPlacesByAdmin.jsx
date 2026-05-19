import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../components/Logout';
import { Logout2 } from '../components/Loutout2';
export const ViewPlacesByAdmin = () => {
    const [places, setplaces] = useState([]);
    const AdminSearch = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.get('http://localhost:5000/api/getStatesInfoByAdmin',{
                params:{
                    statename:e.target.statename.value,
                    category:e.target.category.value
                },
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt_token')}`
                }
            });
            console.log(response)
            setplaces(response.data);
        }
        catch(err){
            console.log(err.message);
        }
    }
    const handleDelete = async(id)=>{
        let placeId = id;
        try{
            const confirm = window.confirm("Are you sure you want to delete this place?");
            if (confirm){
                const response = await axios.post('http://localhost:5000/api/deletePlace',{placeId},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt_token')}`
                }
            });
            alert(response.data.message);
            window.location.reload();
            } 
        }
        catch(err){
            alert(err);
        }
    }
  return (
    <div id='AdminViewMainContainer' className='flex flex-row min-h-screen'>
        <div className='h-screen w-1/3 md:w-1/4 bg-black fixed hidden md:block'>
        <h1 className='text-3xl text-white font-semibold p-3 text-center'>Welcome Admin</h1>
        <div className='mt-15 h-60 flex flex-col gap-8'>
            <Link to='/admin/dashboard'><h1 className='text-white text-center hover:bg-gray-400 duration-200'>Add Place</h1></Link>
            <h1 className='text-center hover:bg-gray-400 duration-200'><Logout2/></h1>
        </div>
        </div>
        <div className='w-full md:w-3/4 ml-auto  bg-linear-to-r from-[#FF9933]/50 to-[#138808]/50'>
        <div className='p-2'>
            <div className='flex flex-row items-center justify-between'>
        <h1 class='md:text-5xl lg:text-[4rem] text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] to-[#138808]'>Travel Bharat</h1>
        <Logout/>   
            </div>
        <div className='flex flex-row items-center justify-between gap-5 mt-5 bg-gray-500/30 p-2 rounded-lg md:hidden'>
            <Link to='/admin/dashboard'><h1 className='text-white text-center hover:underline'>Add Place</h1></Link>
            <h1><Logout2/></h1>
        </div>
        <h1 className='text-xl md:text-2xl lg:text-3xl mt-3 mb-3 text-gray-500 font-semibold'>Search Places Here...</h1>
        </div>
        
            <form onSubmit={AdminSearch} className='flex flex-col justify-evenly bg-blue-400/90 h-35 pl-2 pr-2 md:pl-12 md:pr-12 lg:pl-30 lg:pr-30'> 
          <select name='statename' className='rounded-xl bg-gray-800 text-white pl-2'>
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
          <select name='category' className='rounded-xl  bg-gray-800 text-white pl-2'>
            <option value=''>Choose Category</option>
            <option value='pilgrimage'>Pilgrimage</option>
            <option value='heritage'>Heritage</option>
            <option value='hill station'>Hill Station</option>
            <option value='historical'>Historical</option>
            <option value='nature'>Nature</option>
            <option value='monumental'>Monumental</option>
          </select>
          <button type='submit' className='w-20 border-3 ml-auto mr-auto border-r-amber-700 rounded-lg hover:scale-120 duration-200'>
            Search 
          </button>
        </form>
        <div id='SearchResultsContainer'>
            {places.map((place,index)=>{
                return(
                    <div key={index} className='flex flex-row p-2 md:p-3.5 lg:p-5 bg-white/30 m-2 rounded-xl'>
                        <div className='w-50 h-40 rounded-xl overflow-hidden md:w-70 md:h-60 lg:w-100 lg:h-90'>
                            <img className='w-full h-full object-cover' alt='image' src={place.image}></img>
                        </div>
                        <div className='ml-5 md:ml-10 lg:ml-20 flex flex-col justify-between'>
                        <h1 className=' text-gray-500  text-xl font-semibold md:text-2xl lg:text-4xl'>Place: {place.name}</h1>
                        <h2 className='text-xl italic'>State: {place.state}</h2>
                        <h2 className='md:text-xl'>Category: {place.category}</h2>
                        <h2 className='md:text-xl'>Best Time To Visit: {place.bestTimeToVisit}</h2>
                        <h3 className='md:text-2xl text-xl  text-gray-500 '>Near By Attractions:</h3>
        
                        
                        <ol className='list-decimal ml-5 mb-2'>
                        {place.nearByAttractions.map((attraction,index2)=>{
                            return(
                                <li key={index2}> {attraction.name}</li>
                            )
                        })}
                        </ol>
                        <div>
                        <button type='button' className='w-20 bg-red-600 border-2 text-white border-black rounded-lg hover:scale-112 duration-200' onClick={()=>{handleDelete(place._id)}}>Delete</button>
                        <Link to={`/admin/update/${place._id}`}><button className='mt-2 ml-2 md:ml-5 w-20 bg-blue-500 border-2 text-white border-black rounded-lg hover:scale-112 duration-200' type='button'>Update</button></Link>
                       </div>
                    </div>
                    </div>
                )
            }
        )
        }
        </div>
        </div>
        
    </div>
  )
}
