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
        <div>
            <div className="blogs bg-primary text-light fw-light">
                <h1 className='fw-light text-center p-5'>Manage Your Account</h1>
            </div>
        <div className=' mt-5 account-card shadow p-3 rounded'>
            <img className='user-photo' src={`${user.photoURL}`} alt="" />
            
            <h2>  {user?.displayName && <span>{user.displayName}</span>}</h2>
            <p>Email: {user?.email && <span>{user.email}</span>}</p>

            <button onClick={handleLogOut} className='btn btn-danger'>Log Out</button>
        </div>
        </div>
    );
};

export default Account;