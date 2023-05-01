import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                setSuccess("Successfully registered!!");
                setError("");
                form.reset();
                navigate("/category/0");
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            });
    }
    const handleChecked = event => {
       setAccepted(event.target.checked);
    }
    return (
        <Container className='w-25 mx-auto'
        >
            <h3>Register your account</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name
                        ="name" required placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name
                        ="photo" required placeholder="Enter photo" />
                </Form.Group>

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
                    <Form.Check
                    onClick={handleChecked}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-black">
                    Already have an account? <Link to="/login" className='text-danger'>LogIn</Link>
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

export default Register;