import {Navigate} from 'react-router-dom'
import React from 'react'

export const ProtectedRoutes = ({children}) => {
    const token = localStorage.getItem('jwt_token');
    if (!token){
        return <Navigate to='/admin/login'/>
    }
    else{
        return children
    }
}
