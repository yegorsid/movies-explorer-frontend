import { Navigate } from "react-router-dom";
import React from 'react';

const ProtectedRoute = ({ element: Component, ...props  }) => {
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to='/' replace/>
)}

export default ProtectedRoute;