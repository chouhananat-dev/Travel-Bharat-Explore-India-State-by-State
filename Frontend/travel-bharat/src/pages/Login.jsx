import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/login',{username,password});
            const token = response?.data?.token;
            if (!token) {
                throw new Error('Login response did not include a JWT token');
            }
            localStorage.setItem('jwt_token',token);
            // browser stores the jwt token in the form of key-value pairs
            navigate('/admin/dashboard');
        }
        catch(err){
            console.log(err);
            alert("Login Failed!");
        }
    }
  return (
    <div id='login_main_container' className='w-full h-screen flex flex-row items-center justify-center bg-cover bg-center' style={{backgroundImage:"url('https://res.cloudinary.com/degxzalkz/image/upload/v1778774302/photo-1685542872350-8e9a02d867b5_q35ucd.jpg')"}}>
        <div id='login_form' className='w-130 h-80 bg-orange-200 ml-5 mr-5 opacity-50 rounded-2xl'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-10'>
                <h1 className='text-3xl mt-4'>Admin Login</h1>
                <input type='text' placeholder='Username' className='text-2xl font-semibold text-center outline-none border-b rounded-2xl' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                <input type='password' placeholder='Password' className='text-2xl font-semibold text-center outline-none border-b rounded-2xl' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                <button type='submit' className='text-xl w-24 border-3  border-r-amber-700 rounded-lg hover:scale-120 duration-200'>Login</button>
            </form>
        </div>
    </div>
  )
}
// https://res.cloudinary.com/degxzalkz/image/upload/v1778774302/photo-1685542872350-8e9a02d867b5_q35ucd.jpg