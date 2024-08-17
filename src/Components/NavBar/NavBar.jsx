import { useState, useEffect } from 'react';
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

const NavBar = () => {
    const location = useLocation();
    const [activeKey, setActiveKey] = useState('/'); 

    useEffect(() => {
        setActiveKey(location.pathname);
    }, [location]);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <div className='d-flex align-items-center'>
                            <Logo />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                            <Nav.Link as={NavLink} to="/" className={activeKey === '/' ? 'active' : ''}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/discipline" className={activeKey === '/discipline' ? 'active' : ''}>Discipline</Nav.Link>
                            <NavDropdown title="Member" id="about-us-dropdown">
                                <NavDropdown.Item as={NavLink} to="/applyForMembership" className={activeKey === '/applyForMembership' ? 'active' : ''}>Apply for Membership</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/memberList" className={activeKey === '/memberList' ? 'active' : ''}>Member List</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/publication" className={activeKey === '/publication' ? 'active' : ''}>Publication</Nav.Link>
                            <NavDropdown title="About US" id="about-us-dropdown">
                                <NavDropdown.Item as={NavLink} to="/trustees" className={activeKey === '/trustees' ? 'active' : ''}>Board of Trustees</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/ecCouncil" className={activeKey === '/ecCouncil' ? 'active' : ''}>EC Council</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact" className={activeKey === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/gallery" className={activeKey === '/gallery' ? 'active' : ''}>Gallery</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className={activeKey === '/login' ? 'active' : ''}>Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
