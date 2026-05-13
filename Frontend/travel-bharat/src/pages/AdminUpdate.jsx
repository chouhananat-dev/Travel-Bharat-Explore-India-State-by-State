import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate} from 'react-router-dom';
export const AdminUpdate = () => {
    const navigate = useNavigate();
    const {objectId} = useParams;
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
            const response = await axios.get(`http://localhost:5000/api/adminUpdate/${objectId}`);
            setformData({...formData,
                name:response.data.name,
                state:response.data.state,
                category:response.data.category,
                description:response.data.description,
                bestTimeToVisit:response.data.bestTimeToVisit,
                image:response.data.image,
                map:response.data.map
            })
            setkeyPoints(response.data.keyPoints);
            setnearByAttractions(response.data.nearByAttractions);
        }
        catch(err){
            console.log(err);
        }
    }
    getData();
    });
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
            const response = await axios.put(`http://localhost:5000/api/makeUpdate/${objectId}`,{finalData},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            });
            alert(response);
            navigate('/admin/viewPlaces');
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div id='AdminUpdateContainer'>
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={formData.name} onChange={handleInputChange}></input>
                <input type='text' name='state' value={formData.state} onChange={handleInputChange}></input>
                {keyPoints.map((keyPoint,index)=>{
                    <input type='text' value={keyPoint} key={index} onChange={(e)=>{handlePointChange(index,e.target.value)}}></input>
                })}
                <input type='text' name='category' value={formData.category} onChange={handleInputChange}></input>
                <input type='text' name='description' value={formData.description} onChange={handleInputChange}></input>
                <input type='text' name='bestTimeToVisit' value={formData.bestTimeToVisit} onChange={handleInputChange}></input>
                <input type='text' name='image' value={formData.image} onChange={handleInputChange}></input>
                <input type='text' name='map' value={formData.map} onChange={handleInputChange}></input>
                {nearByAttractions.map((attraction,index)=>{
                    <div id='index'>
                        <input type='text' name='place' value={attraction.place} onChange={(e)=>{handleAttractionChange(index,e.target.value,e.target.name)}} ></input>
                        <input type='text' name='image' value={attraction.image} onChange={(e)=>{handleAttractionChange(index,e.target.value,e.target.name)}} ></input>
                        <input type='text' name='description' value={attraction.description} onChange={(e)=>{handleAttractionChange(index,e.target.value,e.target.name)}} ></input>
                    </div>
                })}
                <button type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}
