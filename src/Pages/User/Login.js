import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mt-5'>
            <h1>Log In to you Account</h1>
            <form>
                <div>
                    <label >Email</label>
                    <input type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" />

                </div>
                <button>Login</button>
            </form>
            <p>Dont have and account ? <Link to={`/signup`} >Signup</Link> </p>
        </div>
    );
};

export default Login;