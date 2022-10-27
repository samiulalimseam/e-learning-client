import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container mt-5'>
            <h1>Sign Up for an Account</h1>
            <form>
                <div>
                    <label >Email</label>
                    <input type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" />

                </div>
                <button>Sign Up</button>
            </form>
            <p>Already Have an Account ? <Link to={`/login`} >Login</Link> </p>
        </div>
    );
};

export default SignUp;