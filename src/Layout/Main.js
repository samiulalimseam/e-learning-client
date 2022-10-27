import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import './Main.css';

const Main = () => {
    return (
        
            <Container  className='p-0' fluid >
                <Header ></Header>
                <Outlet>

                 </Outlet> 
               
                <Footer></Footer>
            </Container>
        
    );
};

export default Main;