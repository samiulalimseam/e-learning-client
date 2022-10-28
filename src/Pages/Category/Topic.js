import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const name = topic.name;

    return (
        <Link className='topic-card d-flex flex-column justify-content-center align-items-center' to={`/courses/${topic.id}`}>
        <div >
            <div className="topic-image d-flex align-items-center ">
                <img className='m-2' src={topic.img} alt="" />
            <h3 className='text-center'>{name}</h3>
            </div>
            <div className=" topic-caption d-flex flex-column ">
            <p className='text-center border rounded'>Instructors: {topic.instructors}</p>
            <p className='text-center '>Total Courses: {topic.courses}</p>
            </div>
           
        </div>
        </Link>
    );
};

export default Topic;