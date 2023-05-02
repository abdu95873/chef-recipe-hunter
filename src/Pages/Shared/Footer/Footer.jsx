import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='bg-dark'>
      
      <Row className='text-light'>
        <Col className='mx-5 p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut.</Col>
        <Col className='mx-5 p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, et.</Col>
        <Col className='mx-5 p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis.</Col>
      </Row>
    </Container>
    );
};

export default Footer;