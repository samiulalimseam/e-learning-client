import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const {login,loginWithGoogle} = useContext(AuthContext)
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;  
        const password = form.password.value;
        login(email,password)
        .then(result =>{
            console.log(result)
            form.reset()
        }) 
        .catch(error =>{
            console.error(error);
        })
    }
    const handleGoogleSignIn = ()=>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error(error))
    }

    return (
        <div className='container mt-5'>
            <h1>Log In to you Account</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label >Email</label>
                    <input name='email' type="email" />
                    
                </div>
                <div>
                    <label >Password</label>
                    <input name='password' type="password" />

                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
            <button onClick={handleGoogleSignIn} className='btn btn-success mt-2'>Sign in with Google</button>
            <button onClick={handleGoogleSignIn} className='ms-2 btn btn-success mt-2'>Sign in with Github</button>
            <p>Dont have and account ? <Link to={`/signup`} >Signup</Link> </p>
        </div>
    );
};

export default Login;