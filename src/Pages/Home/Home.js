import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import searchIcon from './dodge.png';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import idea from './idea.png'
import policy from './policy.png'
import setting from './settings.png'
import certificate from './certificate.png'
import Category from '../Category/Category';

function Home() {
  return (
  <div>
    <div className="banner-cotnainer container-fluid   bg-light ">

        <div className="banner-content ">

        <div className="banner-caption-left p-5   d-flex justify-content-around">
            
        <div className="banner-caption w-3 d-flex flex-column align-items-left justify-content-center">
        <h5 className='hero-text1'>START TO SUCCESS</h5>
        <h3 className='hero-text2'>Access To <span className="text-blue">550+</span> Courses from <span className="text-blue">48</span> Instructors & Institutions</h3>
        <p className='hero-text3'>Take your learning organisation to the next level.</p>
        <div className="wrap shadow">
   <div className="search">
      <input type="search" placeholder='What do you want to learn?' className="searchTerm" />
      <button type="submit" className="searchButton"><img className='seperator-img' className='search-icon' src={searchIcon} alt="" /> </button>
        
   </div>
        </div> 
        </div>
          
           
        <div className="banner-image-right  mb-5 ">
            <img className='banner-img' src="https://htmldemo.net/edumall/edumall/assets/images/home-01-hero-image.png" alt="" />
        </div>
        </div>
        
        </div>
    </div>
    <div className=' mid-seperator d-flex text-light  justify-content-center  ' >
      <div className='seperator-inner d-flex align-items-center'>
    <img className='seperator-img' src={idea} alt="" />
    <h3>Learn The Essential Skills</h3>
        
      </div>
      <div className='seperator-inner d-flex align-items-center' >
    <img className='seperator-img' src={certificate} alt="" />
    <h3>Earn Certificates And Degrees</h3>

      </div>
      <div className='seperator-inner d-flex align-items-center'>
      <img className='seperator-img' src={policy} alt="" />
    <h3>Get Ready for The Next Career</h3>
      </div>
      <div className='seperator-inner d-flex align-items-center'>
      <img className='seperator-img' src={setting} alt="" />
    <h3>Master at Different Areas</h3>
      </div>
    
    


    </div>
    <div className="categories-section container mt-2 ">
    <div className="">

    <Category></Category>
    </div>
    </div>
  </div>
  );
}

export default Home;