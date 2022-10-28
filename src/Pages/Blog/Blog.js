import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blogs bg-primary text-light fw-light">
                <h1 className='fw-light text-center p-5'>Blogs from our Intructors</h1>
            </div>
                <div className="container">
                    <h4>What is CORS?</h4>
                    <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                    <h4>Reasons of using Firebase:</h4>
                    <p>Firebase offers numerous easy-to-use SDKs, efficient back-end services, and user interface libraries for authenticating the users on the application. Typically, it takes months to establish a functional authentication process, but with Firebase, the whole system can be set up in minutes and less than 15 lines of code.</p>
                    <h4>This website has <b>Google</b> , <b>Github</b> Login system</h4>
                    <h4>How does private route works?</h4>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    <h4>What is Node? How does it works?</h4>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. <br /> Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
        </div>
    );
};

export default Blog;