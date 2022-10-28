import React from 'react';
import { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';


const Login = () => {
    const {login,loginWithGoogle,loginWithGitHub} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;  
        const password = form.password.value;
        login(email,password)
        .then(result =>{
            console.log(result)
            form.reset();

            navigate('/')
        }) 
        .catch(error =>{
            console.error(error);
        })
    }
    const handleGoogleSignIn = ()=>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            navigate('/')
            console.log(user);
        })
        .catch(error=> console.error(error))
    }
    const handleGitHubSignIn = () => {
        loginWithGitHub()
        .then(result=> {
            const user = result.user;
            console.log(user)
            navigate('/')
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
            <p>Dont have and account ? <Link to={`/signup`} >Signup</Link> </p>
        </div>
            </form>
            
            
        </div>
    );
};

export default Login;