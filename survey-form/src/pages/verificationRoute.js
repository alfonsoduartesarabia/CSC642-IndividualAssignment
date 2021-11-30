import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "./Auth";

export default function VerificationRoute({children}){
    let location = useLocation();
    return useAuth.isAuthenticated ? (children) : (<Navigate to='/' state={{from: location}} />);
}