import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  
  return user ? element : <Navigate to='/' />
  
};

export default PrivateRoute;
