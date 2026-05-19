import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate} from 'react-router-dom';
import { Logout } from '../components/Logout';
import { Link } from 'react-router-dom';
import { Logout2 } from '../components/Loutout2';
export const AdminUpdate = () => {
    const navigate = useNavigate();
    const {objectId} = useParams();
    const [formData, setformData] = useState({
        name:'',
        state:'',
        category:'',
        description:'',
        bestTimeToVisit:'',
        image:'',
        map:''
    });
    const [keyPoints, setkeyPoints] = useState(['']);
    const [nearByAttractions, setnearByAttractions] = useState([{}]);
    useEffect(()=>{
        const getData = async() =>{
            try{
                console.log(objectId);
            const response = await axios.get(`http://localhost:5000/api/adminUpdate/${objectId}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt_token')}`
                }
            });
            setformData(prevFormData => ({
                ...prevFormData,
                name: response.data.name,
                state: response.data.state,
                category: response.data.category,
                description: response.data.description,
                bestTimeToVisit: response.data.bestTimeToVisit,
                image: response.data.image,
                map: response.data.map
            }))
            setkeyPoints(response.data.keyPoints);
            setnearByAttractions(response.data.nearByAttractions);
        }
        catch(err){
            console.log(err);
        }
    }
    getData();
    }, [objectId]);
    const handleInputChange = (e) =>{
        setformData({...formData, [e.target.name]:e.target.value});
    }
    const handlePointChange = (index,value) => {
        const updatePoints = [...keyPoints]
        updatePoints[index]=value;
        setkeyPoints(updatePoints)
    }
    const handleAttractionChange = (index,value,key) =>{
        const updateAttractions = [...nearByAttractions]
        updateAttractions[index] = {...updateAttractions[index],[key]:value}
        setnearByAttractions(updateAttractions);
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const finalData = {...formData, keyPoints, nearByAttractions}
        try{
            const response = await axios.put(`http://localhost:5000/api/makeUpdate/${objectId}`, finalData, {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt_token')}`
                }
            });
            alert(response.data);
            navigate('/admin/viewPlaces');
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div id='AdminUpdateContainer' className='flex flex-row '>
        <div className='h-screen w-1/3 md:w-1/4 bg-black fixed hidden md:block'>
        <h1 className='text-3xl text-white font-semibold p-3 text-center'>Welcome Admin</h1>
        <div className='mt-15 h-60 flex flex-col gap-8'>
            <Link to='/admin/dashboard'><h1 className='text-white text-center hover:bg-gray-400 duration-200'>Add Place</h1></Link>
            <h1 className='text-center'><Logout2/></h1>
        </div>
        </div>
        <div className='lg:p-5 p-2 w-full md:w-3/4 ml-auto bg-linear-to-r from-[#FF9933]/50 to-[#138808]/50'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='md:text-5xl lg:text-[4rem] text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#FF9933] to-[#138808]'>Travel Bharat</h1>
                <Logout/>
            </div>
            <div className='flex flex-row items-center justify-between gap-5 mt-5 bg-gray-500/30 p-2 rounded-lg'>
                <Link to='/admin/dashboard'><h1 className='text-white text-center hover:underline'>Add Place</h1></Link>
                <Link to='/admin/viewPlaces'><h1 className='text-white text-center hover:underline'>View Places</h1></Link>
            </div>
            <form onSubmit={handleSubmit} className='space-y-8'>
                <h1 className='text-xl md:text-2xl lg:text-3xl mt-3 mb-3 text-gray-500 font-semibold'>Update Place</h1>

                <div id='input_container' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>Name</label>
                        <input type='text' name='name' value={formData.name} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>State</label>
                        <input type='text' name='state' value={formData.state} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>Category</label>
                        <input type='text' name='category' value={formData.category} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>Best Time To Visit</label>
                        <input type='text' name='bestTimeToVisit' value={formData.bestTimeToVisit} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2 md:col-span-2'>
                        <label className='font-semibold text-gray-600'>Description</label>
                        <textarea name='description' value={formData.description} onChange={handleInputChange} rows={4} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>Image URL</label>
                        <input type='text' name='image' value={formData.image} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-gray-600'>Map URL</label>
                        <input type='text' name='map' value={formData.map} onChange={handleInputChange} className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none' />
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-gray-700 font-semibold'>Key Points</h2>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        {keyPoints.map((keyPoint, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <label className='font-semibold text-gray-600'>Point {index + 1}</label>
                                <input
                                    type='text'
                                    value={keyPoint}
                                    onChange={(e) => handlePointChange(index, e.target.value)}
                                    className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-gray-700 font-semibold'>Near By Attractions</h2>
                    <div className='space-y-4'>
                        {nearByAttractions.map((attraction, index) => (
                            <div key={index} className='rounded-2xl border border-white/20 bg-white/10 p-5 shadow-sm'>
                                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-semibold text-gray-600'>Name</label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={attraction.name}
                                            onChange={(e) => handleAttractionChange(index, e.target.value, e.target.name)}
                                            className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-semibold text-gray-600'>Image URL</label>
                                        <input
                                            type='text'
                                            name='image'
                                            value={attraction.image}
                                            onChange={(e) => handleAttractionChange(index, e.target.value, e.target.name)}
                                            className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 mt-4'>
                                    <label className='font-semibold text-gray-600'>Description</label>
                                    <input
                                        type='text'
                                        name='description'
                                        value={attraction.description}
                                        onChange={(e) => handleAttractionChange(index, e.target.value, e.target.name)}
                                        className='w-full rounded-lg border border-white/30 bg-white/50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button type='submit' className='w-20 border-3 border-r-amber-700 rounded-lg hover:scale-120 duration-200'>Update</button>
            </form>
        </div>
    </div>
  )
}
