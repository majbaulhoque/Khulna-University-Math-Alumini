import { useState, useEffect } from 'react';
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

const NavBar = () => {
    const location = useLocation();
    const [activeKey, setActiveKey] = useState('/'); // Initialize activeKey with '/'

    useEffect(() => {
        setActiveKey(location.pathname);
    }, [location]);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand href="/">
                        <div className='d-flex align-items-center'>
                            <Logo />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                            <Nav.Link href="/" className={activeKey === '/' ? 'active' : ''}>Home</Nav.Link>
                            <Nav.Link href="/discipline" className={activeKey === '/discipline' ? 'active' : ''}>Discipline</Nav.Link>
                            <Nav.Link href="/member" className={activeKey === '/member' ? 'active' : ''}>Member</Nav.Link>
                            <Nav.Link href="/publication" className={activeKey === '/publication' ? 'active' : ''}>Publication</Nav.Link>
                            <NavDropdown title="About US" id="about-us-dropdown">
                                <NavDropdown.Item href="/industrialSite" className={activeKey === '/industrialSite' ? 'active' : ''}>Service one</NavDropdown.Item>
                                <NavDropdown.Item href="/newsAndEvent" className={activeKey === '/newsAndEvent' ? 'active' : ''}>Service two</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/signUp" className={activeKey === '/signUp' ? 'active' : ''}>Sign Up</Nav.Link>
                            <Nav.Link href="/profile" className={activeKey === '/profile' ? 'active' : ''}>Profile</Nav.Link>
                            <Nav.Link href="/login" className={activeKey === '/login' ? 'active' : ''}>Log In</Nav.Link>
                            <Nav.Link href="/payment" className={activeKey === '/payment' ? 'active' : ''}>Payment</Nav.Link>
                            <Nav.Link href="/logOut" className={activeKey === '/logOut' ? 'active' : ''}>Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
