import React from 'react';
import{AiFillFilePdf} from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import './Course.css';

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};


const ref = React.createRef();

const Course = () => {
    const courseData = useLoaderData();
    const course =courseData[0];
    let displayPrice= '';
    if(course.price === 0){
        displayPrice = 'Free';
    } else{
        displayPrice = '$' + course.price ;
    }
    console.log(course);
    return (
        <div ref={ref} className=''>
            
                <div  className="cover">

            <div className="container mt-5 course">

            <div className='course-header'>
                <div className="header-caption">

            <h6>Name: {course.Name}</h6>
            <p className='fs-4'>Category: {course.category}</p>
            <div className="part-parent">
            <div className="part">
            <p className='fs-6 text-center' >Duration: {course.time} hour(s)</p>
            <p className='fs-6 text-center'>Price: {displayPrice} </p>
            </div>
            <div className="part">
            <p className='fs-6 text-center'>Enrolled: {course.enrolled} </p>
            <p className='fs-6 text-center'>Instructor: {course.instructor} </p>

            </div>

            </div>
                </div>
            <div className="header-image">
                <img src={`${course.image}`} alt="" />
            </div>
            </div>
            </div>
            <div className=' container course-caption'>
            <Pdf  options={options} x={0} y={0} scale={0.2} targetRef={ref} filename="course.pdf">
        {({ toPdf }) => <button className='btn btn-outline-light' onClick={toPdf}><AiFillFilePdf /> </button>}
      </Pdf>

            </div>
                </div>
                <div className="details container mt-5">
                
                <p>Description: {course.description} </p>
                </div>
        </div>
    );
};

export default Course;