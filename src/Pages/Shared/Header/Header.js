import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../Header/logotp.png';
import { Link } from 'react-router-dom';
import searchIcon from './dodge.png';

function Header() {
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
            <Link className='link'  to={'*'} > About</Link>
          </Nav>
          <div className="wrap2">
    <div className="search2">
      <input type="search" placeholder='What do you want to learn?' className="searchTerm2" />
      <button type="submit" className="searchButton2"><img className='search-icon2' src={searchIcon} alt="" /> </button>
        
   </div>
        </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;