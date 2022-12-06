import React, { useState } from 'react';
import Topic from './Topic';
import './Category.css';
import { useEffect } from 'react';

const Category = () => {
    
  const [categories,setCatagories] = useState([])
  useEffect(()=>{
      fetch('https://educare-server-eta.vercel.app/categories')
      .then(res=> res.json())
      .then(data=> {
        console.log(data);
        setCatagories(data)
      });
  },[])
    return (
        <div>
          <div className="blogs bg-primary text-light fw-light">
                <h1 className='fw-light text-center p-5'>Explore Course Categories</h1>
            </div>
           <div className="show-case container">

            {
               categories.map(category => <Topic key={category.id} topic={category} ></Topic>)
            }
           </div>

        </div>
    );
};

export default Category;