import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

  const { user } = useContext(AuthContext);

  return (
    <Container>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Chef Hunter</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="">
                <Link className='text-decoration-none text-secondary' to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link className='text-decoration-none text-secondary' to='/'>Blog</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user && <Nav.Link href="#deets"><img src={URL} alt="" /></Nav.Link>}

              <Nav.Link eventKey={2} href="#memes" >

                {
                  user ?
                    <Button  variant="danger">LogOut</Button> :
                    <Link to="/login">
                      <Button className='me-3' variant="primary">Loin</Button>
                    </Link>
                }

                {
                  user ?
                    <></> :
                    <Link to="/register">
                      <Button variant="success">Register</Button>
                    </Link>
                }



              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;