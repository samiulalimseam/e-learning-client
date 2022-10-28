import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from '../Header/logotp.png';
import { Link } from 'react-router-dom';
import searchIcon from './dodge.png';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';


function Header() {
  const {user} = useContext(AuthContext);
  const [darkMode,setDarkMode]= useState(false);
  const toggleThemeMode = ()=>{
      setDarkMode(!darkMode);
  }
  
console.log(user);
  return (
    <Navbar className='shadow header-section sticky-top'  bg="white" expand="lg">
      <Container className=' ' >
        <Navbar.Brand href='/'><img className='logo' src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='link'  to={'/'} > Home</Link>
            <Link className='link'  to={'/category'} > Explore </Link>
            <Link className='link'  to={'/blog'} > Blog</Link>
            <Link className='link'  to={'/faq'} > FAQ</Link>
           
            
          </Nav>
          <div className="wrap2">
    <div className="search2">
              <input type="search" placeholder='What do you want to learn?' className="searchTerm2" />

              <button type="submit" className="searchButton2"><img className='search-icon2' src={searchIcon} alt="" /> </button>

              

              <div onClick={toggleThemeMode} className='d-flex justify-content-center align-items-center' >
                {darkMode ? <div className='toggle-theme'><BsFillMoonFill></BsFillMoonFill></div> : <div className='toggle-theme'><BsFillSunFill></BsFillSunFill> </div>}</div>
              {!user?.displayName && <Link className='profile-icon ms-2   mt-auto mb-auto' to={`/account`}> <span className="profile-icon "> <CgProfile /> </span></Link>}
              {user?.displayName && 
              <Link to='/account' className='d-flex justify-content-center align-items-center'>
                <abbr className='' title={`${user.displayName}`}><span className="d-flex text-decoration-none justify-content-center align-items-center profile-btn btn ms-2 "> <img className='profile-photo ' src={`${user.photoURL}`} alt="" /> </span></abbr>
              </Link>}

   </div>
        </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;