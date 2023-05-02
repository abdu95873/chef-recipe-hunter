import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name,email,password);

        setError('');
        setSuccess('');

        if (password !== confirm) {
            setError('Your password not match')
            return
            
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }


        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser); 
            setSuccess('Successfully login');
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })

        setSuccess('Successfully login');
        form.reset();
        

        }


    return (
        <Container className='my-4 py-5 mx-auto w-25'>
            <h4 className='text-center'>please Register</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="url" name='photo' placeholder="Enter your photo url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto'>
                    Register
                </Button>

                <Form.Text className='text-success d-block'>{success}</Form.Text>
                <Form.Text className='text-danger d-block'>{error}</Form.Text>

                <Form.Text className='text-center mx-auto'>Already have an account? <Link to="/login" className='text-danger'>Login</Link></Form.Text>

                
                
            </Form>
        </Container>
    );
};

export default Register;