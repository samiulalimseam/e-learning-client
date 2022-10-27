import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CourseCatalog from '../CourseCatalog/CourseCatalog';
import './Courses.css';

const Courses = () => {
    const categoryid = 2;
    return (
        <div className='mt-3 '>
            <div className="courses-header container-fluid d-flex justify-content-center align-items-center">

            <h2 className='text-center '>All $$$ courses available for you </h2>
            </div>
            <Container >

            
            <Row >   
                    <Col className=' courses-sidebar col-2 d-flex flex-column rounded mt-3'> <h2 className='sidebar-text'>Filter</h2>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> Python</Link>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> Web Development</Link>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> Data Science</Link>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> Excel</Link>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> AWS</Link>
                    <Link className='sidebar-btn' to={`/category/${categoryid}`} > <input type="radio" name='course' /> NFT</Link>
                    </Col>
                    <Col className=' courses col-10 '> 
                    <CourseCatalog>  
                    </CourseCatalog>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Courses;