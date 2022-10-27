import React from 'react';
import { categories } from '../../fakeDb/fk';
import CourseCard from '../CourseCard/CourseCard';
import './CourseCatelog.css'

const CourseCatalog = () => {
    const localCategories = categories;
    console.log(categories);

    return (
        <div className='course-catelog'>
           
            {
                localCategories.map(category => 
                    category.course.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    )
    }
        </div>
    );
};

export default CourseCatalog;