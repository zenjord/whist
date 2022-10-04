import { useAuthentication } from '../../contexts/AuthenticationContext/AuthenticationContext';
import Avatar from '../Avatar/Avatar';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function NavbarUserMenu() {
    const { logoutUser, user } = useAuthentication();
    const userName = user.displayName || user.email;

    return (
        <Nav>
            <Nav.Item>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <Avatar size="30px" />
                        {userName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item as={NavLink} to="/user/me/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={logoutUser}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
        </Nav>
    )
}

export default NavbarUserMenu;