import { useAuthentication } from '../../contexts/AuthenticationContext/AuthenticationContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import NavbarUserMenu from './NavbarUserMenu';

function NavBar() {
    const { logoutUser } = useAuthentication();
    return (
        <Navbar bg="dark" variant="dark" className="px-4">
            <Nav className="me-auto">
                <Navbar.Brand as={NavLink} to="/" >
                    <img src="./icon.png" alt="Brand logo" width="30" height="30" />
                </Navbar.Brand>
                <Nav.Item>
                    <Nav.Link end as={NavLink} to="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>
            <NavbarUserMenu />
        </Navbar>
    );
}

export default NavBar;