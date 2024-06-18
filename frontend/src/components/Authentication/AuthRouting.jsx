import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = sessionStorage.getItem("token"); // replace with your authentication check

    return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default AuthenticatedRoute;