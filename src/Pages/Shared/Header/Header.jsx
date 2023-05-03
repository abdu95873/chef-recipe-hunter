import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { signOut } from 'firebase/auth';



const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
    })
    .catch(error => {
      console.log(error);
    })
  }


  return (
    <Container className='my-5 '>

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
                <Link className='text-decoration-none text-secondary' to='/blog'>Blog</Link>
              </Nav.Link>
            </Nav>
            <Nav>

              
              {user && 
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user.displayName}</Tooltip>}>
              <span className="d-inline-block">

                

                  <img className='mt-2' disabled style={{ fontSize: '2rem', pointerEvents: 'none', height:'40px', borderRadius:'50px', width:'40px' }} src={user.photoURL} alt="" />

                
              </span>
            </OverlayTrigger>}

              <Nav.Link eventKey={2} href="#memes" >

                {
                  user ?
                    <Button onClick={handleLogOut}  variant="danger">LogOut</Button> :
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