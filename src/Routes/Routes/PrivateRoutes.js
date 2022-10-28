import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading === true){
        return <div> <h3>Loading...</h3> </div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate state={{from: location}} replace to='/login'></Navigate>
    
};

export default PrivateRoutes;