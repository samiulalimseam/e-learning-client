import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';


const Login = () => {
    const {login,loginWithGoogle,loginWithGitHub} = useContext(AuthContext)
    const navigate = useNavigate()
    const  [globalError,setGlobalError]=useState(null)
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
 
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;  
        const password = form.password.value;
        
        login(email,password)
        .then(result =>{
            setTimeout(() => {
                navigate(from, { replace: true });
              }, 1000);
            console.log(result)
            form.reset();

           
        }) 
        .catch(error =>{
            setGlobalError(error);
            console.log(globalError)
        })
    }
    const handleGoogleSignIn = ()=>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            setTimeout(() => {
                navigate(from, { replace: true });
              }, 1000);
            console.log(user);
        })
        .catch(error=> console.error(error))
    }
    const handleGitHubSignIn = () => {
        loginWithGitHub()
        .then(result=> {
            const user = result.user;
            console.log(user)
            setTimeout(() => {
                navigate(from, { replace: true });
              }, 1000);
        })
        .catch(error=> console.error(error))
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center fw-light'>Log In to you Account</h1>
            <form className='login-form' onSubmit={handleOnSubmit}>
                <div>
                    <label >Email</label>
                    <input className='mb-2 form-control' placeholder='Enter email' name='email' type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input className='mb-2 form-control' name='password' placeholder='Enter Password' type="password" />

                </div>
                <button className='btn btn-primary mb-2'>Login</button>
        <div className="other-login">
        <button onClick={handleGoogleSignIn} className='btn btn-success mt-2'>Sign in with Google</button>
            <button onClick={handleGitHubSignIn} className='ms-2 btn btn-success mt-2'>Sign in with Github</button>
            {globalError?  <p className='text-danger'>Incorrect Email Password Combination</p> : <p className='text-success'></p>}
            <p>Dont have and account ? <Link to={`/signup`} >Signup</Link> </p>
        </div>
            </form>
            
            
        </div>
    );
};

export default Login;