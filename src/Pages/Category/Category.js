import React, { useState } from 'react';
import Topic from './Topic';
import './Category.css';
import { useEffect } from 'react';

const Category = () => {
    
  const [categories,setCatagories] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/categories')
      .then(res=> res.json())
      .then(data=> {
        console.log(data);
        setCatagories(data)
      });
  },[])
    return (
        <div>
           <div className="show-case container">

            {
               categories.map(category => <Topic key={category.id} topic={category} ></Topic>)
            }
           </div>

        </div>
    );
};

export default Category;