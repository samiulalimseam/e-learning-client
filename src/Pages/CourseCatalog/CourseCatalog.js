import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CourseCatelog.css'

const CourseCatalog = ({courses}) => {
    const courseData= courses.course;
    const courseArray= [];
    courseData.map(course=> courseArray.push(course) )
    console.log(courseArray);
    
   

    return (
        <div className='course-catelog'>
           
            {
                 
                    courseData.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    
    }
        </div>
    );
};

export default CourseCatalog;