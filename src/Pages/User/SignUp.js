import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up for an Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Name</label>
                    <input name='name' type="text" />
                    
                </div>
                <div>
                    <label >Email</label>
                    <input name='email' type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input name='password' type="password" />

                </div>
                <button>Sign Up</button>
            </form>
            <p>Already Have an Account ? <Link to={`/login`} >Login</Link> </p>
        </div>
    );
};

export default SignUp;