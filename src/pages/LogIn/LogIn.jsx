import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const LogIn = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/category/0";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("Successfully Logged in !!");
                setError("");
                form.reset();
                navigate(from, { replace: true });


            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            });
    }
    return (
        <Container className='w-25 mx-auto'
        >
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name
                        ="email" required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name
                        ="password" required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-black">
                    Dont have an account? <Link to="/register" className='text-danger'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default LogIn;