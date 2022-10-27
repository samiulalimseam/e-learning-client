import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading === true){
        return <div> <h3>Loading...</h3> </div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoutes;