import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import './Account.css'

const Account = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=> {
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    
    return (
        <div className=' mt-5 account-card shadow p-3 rounded'>
            <img className='user-photo' src={`${user.photoURL}`} alt="" />
            <h1>Account</h1>
            <p>Name:  {user?.displayName && <span>{user.displayName}</span>}</p>
            <p>Email: {user?.email && <span>{user.email}</span>}</p>

            <button onClick={handleLogOut} className='btn btn-danger'>Log Out</button>
        </div>
    );
};

export default Account;