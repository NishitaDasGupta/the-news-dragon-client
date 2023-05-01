import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user ,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        return  <Spinner className='ms-5' animation="border" variant="primary" />
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login' replace
                 state={{from:location}}></Navigate>
        </div>
    );
};

export default PrivateRoute;