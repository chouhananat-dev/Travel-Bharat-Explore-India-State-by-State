import React from 'react'
import { useState, axios } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/login',{username,password});
            const token = response.token
            localStorage.setItem('jwt_token',token);
            // browser stores the jwt token in the form of key-value pairs
            navigate('/admin/dashboard');
        }
        catch{
            alert("Login Failed!");
        }
    }
  return (
    <div id='login_main_container'>
        <div id='login_form'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                <input type='password' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}
