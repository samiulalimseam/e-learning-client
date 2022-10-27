import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            navigate('/')
            console.log(user);
        })
        .catch( error =>{
            console.log(error);
        })

        
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
                <button className='btn btn-primary'>Sign Up</button>
            </form>
            <p>Already Have an Account ? <Link to={`/login`} >Login</Link> </p>
        </div>
    );
};

export default SignUp;