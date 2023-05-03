import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container className='bg-secondary'>
      
      <Row className='text-light align-content-center'>
        <Col className='mx-5 p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut.</Col>
        <Col className='mx-5 p-5'>
          <p className='mb-0 text-center'>Contact</p>
          <p className='my-0 text-center'><small>Phone: +880000000000</small></p>
          <p className='my-0 text-center'><small>Email: aaaaaa@gmail.com</small></p>
          </Col>
        <Col className='mx-5 p-5'>
        <FaFacebookF className='m-3' />
        <FaTwitter className='m-3'/>
        <FaGoogle className='m-3'/>


        </Col>
      </Row>
    </Container>
    );
};

export default Footer;