import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'


const SignUp = () => {
    const {createUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail,] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photourl.value;
        const profile = {
            displayName: name,
            photoURL : photoURL
        } 
        console.log(profile)
        
        

        console.log(email,password)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            updateUser(profile)
            .then(()=>{console.log('sign up done')})
        .cath((error)=> console.log(error));
            navigate('/')
            console.log(user);
        })
        .catch( error =>{
            console.log(error);
        })

        
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center fw-light'>Sign Up for an Account</h1>
            <form autocomplete="off" className='sign-up-form' onSubmit={handleSubmit}>
                <div>
                    <label >Full Name</label>
                    <input placeholder='Enter your full name' className='form-control mb-2'  name='name' type="text" />
                    
                </div>
                <div>
                    <label >Photo URL</label>
                    <input placeholder='Enter your photo link' className='form-control mb-2' name='photourl' type="text" />
                    
                </div>
                <div>
                    <label >Email</label>
                    <input placeholder='Give your Email here' className='form-control mb-2' name='email' type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input placeholder='Enter password' className='form-control mb-2' name='password' type="password" />

                </div>
                <button className='btn btn-primary'>Sign Up</button>
            <p>Already Have an Account ? <Link to={`/login`} >Login</Link> </p>
            </form>
        </div>
    );
};

export default SignUp;