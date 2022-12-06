import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import CourseCatalog from '../CourseCatalog/CourseCatalog';
import './Courses.css';

const Courses = () => {
    
    const data = useLoaderData()
    const [categories,setCatagories] = useState([])
  useEffect(()=>{
      fetch('https://educare-server-eta.vercel.app/categories')
      .then(res=> res.json())
      .then(data=> {
       
        setCatagories(data)
      });
  },[])
  
    
    
    return (
        <div className='mt-3 '>
            <div className="courses-header container-fluid d-flex justify-content-center align-items-center">

            <h2 className='text-center '>All {data.course.length} courses available for you </h2>
            </div>
        <Container >

            
            <div className='row'>   
                    <div className=' courses-sidebar col-sm-2 rounded mt-3'> <h2 className='sidebar-text'>Filter</h2>
                    {
                    categories.map(category=> <Link className='sidebar-btn rounded' to={`/courses/${category.id}`} > <input type="radio" name='course' /> {category.name}</Link> )
                    }
                    <Link className='sidebar-btn rounded' to={`/category/`} > <input type="radio" name='course' />All Courses</Link>
                    
                    </div>
                    <div className=' courses sm col-sm-10'> 
                    <CourseCatalog courses={data}>  
                    </CourseCatalog>
                    </div>
                    
                </div>
            </Container> 
        </div>
    );
};

export default Courses;