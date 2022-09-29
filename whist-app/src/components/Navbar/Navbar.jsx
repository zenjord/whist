import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <div className='container'>
                <Nav>
                    <Navbar.Brand as={NavLink} to="/">
                        <img src="./icon.png" alt="Brand logo" width="30" height="30" />
                    </Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/active">Broken</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
}

export default NavBar;