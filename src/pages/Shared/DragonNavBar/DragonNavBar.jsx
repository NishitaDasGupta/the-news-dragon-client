import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
const DragonNavBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-black'
                            to='/'>Home</Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>

                    </Nav>
                    <Nav>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                        {
                            user ?
                                <Button variant="secondary">LogOut</Button> :
                                <Link to='/login'><Button variant="secondary">LogIn</Button></Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default DragonNavBar;