import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Account = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=> {
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
        <div className='container mt-5'>
            <h1>Account</h1>
            <p>Name:  {user?.displayName && <span>{user.displayName}</span>}</p>
            <p>Email: {user?.email && <span>{user.email}</span>}</p>

            <button onClick={handleLogOut} className='btn btn-danger'>Log Out</button>
        </div>
    );
};

export default Account;