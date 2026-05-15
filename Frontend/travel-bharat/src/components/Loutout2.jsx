import React from 'react'
import {useNavigate} from 'react-router-dom'
export const Logout2 = () => {
    const navigate = useNavigate();
    const handleLogoutClick = () =>{
        localStorage.removeItem('token');
        navigate('/');
    }
  return (
    <div>
        <button type='button' className='text-white' onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
