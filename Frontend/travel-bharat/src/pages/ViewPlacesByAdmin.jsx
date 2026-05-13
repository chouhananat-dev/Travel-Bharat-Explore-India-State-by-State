import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const ViewPlacesByAdmin = () => {
    const [places, setplaces] = useState([]);
    const [loading, setloading] = useState(false);
    const [placeId, setplaceId] = useState('');
    const AdminSearch = async(e) =>{
        e.preventdDefault();
        try{
            const response = await axios.get('http://localhost:5000/api/getStatesInfoByAdmin',{
                params:{
                    statename:e.target.statename.value,
                    category:e.target.category.value
                }
            },{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            });
            setplaces(response.data);
            setloading(true);
        }
        catch(err){
            console.log(err);
        }
    }
    const handleDelete = async(id)=>{
        setplaceId(id)
        try{
            const confirm = confirm("Do you really want to delete this place?");
            if (confirm){
                const response = await axios.post('http://localhost:5000/api/deletePlace',{placeId},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response);
            } 
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div id='AdminViewMainContainer'>
        <div>
            <form onSubmit={AdminSearch}> 
          <select name='statename'>
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
          <select name='category'>
            <option value=''>Choose Category</option>
            <option value='pilgrimage'>Pilgrimage</option>
            <option value='heritage'>Heritage</option>
            <option value='hill station'>Hill Station</option>
            <option value='historical'>Historical</option>
            <option value='nature'>Nature</option>
            <option value='monumental'>Monumental</option>
          </select>
          <button type='submit'>
            Search 
          </button>
        </form>
        </div>
        <div id='SearchResultsContainer'>
            {loading ? places.map((place,index)=>{
                return(
                    <div key={index}>
                        <h1>{place.name}</h1>
                        <h2>{place.state}</h2>
                        <h3>{place.category}</h3>
                        <img alt='image' src={place.image}></img>
                        {place.nearByAttractions.map((attraction,index)=>{
                            return(
                                <h2 key={index}>{attraction.place}</h2>
                            )
                        })}
                        <button type='button' onClick={()=>{handleDelete(place._id)}}>Delete</button>
                        <Link to={`/admin/update/${place._id}`}><button type='button'>Update</button></Link>
                    </div>
                )
            }): <div>
                <h1>Loading...</h1>
                </div>}
        </div>
    </div>
  )
}
