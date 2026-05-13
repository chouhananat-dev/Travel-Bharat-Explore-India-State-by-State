import {useNavigate} from 'react-router-dom'
import React from 'react'

export const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (!token){
        navigate('/admin/login');
    }
    else{
        return children
    }
}
