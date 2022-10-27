import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';
import './Category.css';
import { categories } from '../../fakeDb/fk';

const Category = () => {
    const data = useLoaderData();
    const catagory = categories;
  ;
    return (
        <div>
           <div className="show-case container">

            {
               catagory.map(category => <Topic key={category.id} topic={category} ></Topic>)
            }
           </div>

        </div>
    );
};

export default Category;