import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css';
import 'react-toastify/dist/ReactToastify.css';




const Cart = () => {
    const navigate = useNavigate()
    
    const courseData = useLoaderData();
    const course =courseData[0];
    const notify = () => {
        toast( "Purchase Successful!")
        
    };
    return (
        <div className="div">
            <div className="banner ">
                <h1 className='p-5 text-light fw-light text-center'>Check your items</h1>
            </div>
            <Container className='mt-5 card-parent'>
            <div className="cart-card shadow">
            <h5 className='fw-medium border-bottom  text-success pb-2'>Order Summery</h5>
            <p>Your Items:</p>
            <div className="items border rounded m-2 p-2">
            <h6 className=''> {`>>`} {course.Name}</h6>
            <p>Price: <b>{course.price}  USD</b> </p>
            </div>
            <p>Total: <b>{course.price}  USD</b> </p>
            <button onClick={notify} className="btn btn-danger">Confirm</button>
            </div>
            </Container>
            <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
        </div>
            
        
    );
};

export default Cart;