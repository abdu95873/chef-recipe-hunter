import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const Login = () => {
    
    const [show, setShow] =useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');




    const { signIn, googleLogin, gitLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    





    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');
    
        signIn(email, password)
          .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace:true})
            setSuccess('Successfully login');
    
          })
          .catch(error => {
            console.log(error);
            setError(error.message);
          })
      }

      const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace:true})
            setSuccess('Successfully login');
    
          })
          .catch(error => {
            console.log(error);
            setError(error.message);
          })

      } 
      const handleGitLogin = ()=>{
        gitLogin()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace:true})
            setSuccess('Successfully login');
    
          })
          .catch(error => {
            console.log(error);
            setError(error.message);
          })

      }





    return (
        <Container className='my-4 py-5 mx-auto w-25'>
      <h4 className='text-center'>please login</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <p onClick={() => setShow(!show)}><small>
                        { 
                        show ? <span>Hide password</span>: <span>Show password</span>
                        
                    }
                        </small></p>


        <Button variant="primary" type="submit" className='d-block mx-auto'>
          Login
        </Button>

        <Form.Text className='text-danger d-block'>{error}
        </Form.Text>
        <Form.Text className='text-success d-block'>{success}

        </Form.Text>

        <Form.Text className='text-center mx-auto'>Donn't have an account? <Link to="/register" className='text-danger'>Register</Link></Form.Text>
      </Form>

      <h5>Login with ....</h5>
      
      <button className='me-3' onClick={handleGoogleLogin}>google</button>
      <button onClick={handleGitLogin}>git</button>
    
    </Container>
    );
};

export default Login;