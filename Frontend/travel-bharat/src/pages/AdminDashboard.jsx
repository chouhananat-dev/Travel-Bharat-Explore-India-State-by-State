import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export const AdminDashboard = () => {
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
  const [nearByAttractions, setnearByAttractions] = useState([{
    place:'',
    description:'',
    image:''
  }]);
  const handleChange = (e) =>{
    setformData({...formData, [e.target.name]:e.target.value})
  }
  const handleKeyPointClick = ()=>{
    setkeyPoints([...keyPoints, '']);
  }
  const handleKeyPointChange=(index,value)=>{
    const keypoint = [...keyPoints]
    keypoint[index]=value
  }
  const handleNearByClick = () =>{
    setnearByAttractions([...nearByAttractions, {
      place:'',
      description:'',
      image:''
    }])
  }
  const handleNearByChange=(e,index,value)=>{
    const nearbyattractions = [...nearByAttractions]
    nearbyattractions[index] = {...nearByAttractions[index],[e.target.name]:value}
    setnearByAttractions(nearByAttractions);
  }
  const handleSubmit = async() =>{
    const finalData={...formData, nearByAttractions, keyPoints}
    try{
      const response = await axios.post('http://localhost:5000/api/savedata',finalData,{
        headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}
      });
      alert(response);
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <div id='admin_main_container'>
      <div id='admin_inner_container'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
          <input type='text' name='state' value={formData.state} onChange={handleChange}></input>
          {keyPoints.map((keypoint,index)=>(
            <input key={index}
            value={keypoint}
            type='text' onChange={(e)=>{handleKeyPointChange(index, e.target.value)}}></input>
          ))}
          <button type='button' onClick={handleKeyPointClick}>Add Key Points</button>
          <input type='text' name='category' value={formData.category} onChange={handleChange}></input>
          <input type='text' name='description' value={formData.description} onChange={handleChange}></input>
          <input type='text' name='bestTimeToVisit' value={formData.bestTimeToVisit} onChange={handleChange}></input>
          <input type='text' name='image' value={formData.image} onChange={handleChange}></input>
          <input type='text' name='map' value={formData.map} onChange={handleChange}></input>
          {nearByAttractions.map((attraction,index)=>(
            <>
            <input type='text' key={index} name='place' value={attraction.place} onChange={(e)=>{handleNearByChange(index,e.target.value)}}></input>
            <input type='text' key={index} name='description' value={attraction.description}></input>
            <input type='text' key={index} name='image' value={attraction.image}></input>
            </>
          ))}
          <button type='button' onClick={handleNearByClick}>Add Near by Attractions</button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
