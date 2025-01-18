import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/UseAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout=()=>{
    const navigate=useNavigate()
    const {dispatch}=useAuthContext()
    const logout=()=>{
        const remove=localStorage.removeItem('user');
        dispatch({type:'LOGOUT'})
        navigate('/signin')


    }
    return {logout}
}