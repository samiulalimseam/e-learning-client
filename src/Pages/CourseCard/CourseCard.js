import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({course}) => {
    console.log(course);
    return (
        <div  className='course-card shadow'>
            <img src={`${course.image}`} alt="" />
            <div className="course-caption">
            <h2>{course.Name}</h2>
            <p>Level: {course.level}</p>
            <p>Enrolled: {course.enrolled}</p>
            <p>Instructor: {course.instructor}</p>
            
            <Link to={`/course/${course.id}`} className='btn btn-primary'>Enroll</Link>
            </div>
        </div>
    );
};

export default CourseCard;