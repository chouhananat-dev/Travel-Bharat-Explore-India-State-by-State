import React from 'react'
import useNavigate from 'react-router-dom'
export const Logout = () => {
    const navigate = useNavigate();
    const handleLogoutClick = () =>{
        localStorage.removeItem('token');
        navigate('/admin/login');
    }
  return (
    <div>
        <button type='button' onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}
