import React, { useContext } from 'react';
import { WrapperContext } from '../../hooks/Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, setUser } = useContext(WrapperContext);


    if (user === null) {
        return <Navigate to="/login" />
    } else {
        return children;
    }


};

export default PrivateRoute;