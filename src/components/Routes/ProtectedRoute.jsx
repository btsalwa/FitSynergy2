import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Auth/Login';

const ProtectedRoute = ({ Component }) => {
    const auth = {'token':false} // Your authentication logic goes here

    return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
