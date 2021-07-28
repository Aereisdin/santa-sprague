import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import LoginModal from './ModalLogin';
import API from '../utils/API';
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';

export default function NavBar() {

    const { user, logout } = useContext(UserContext);
    const history = useHistory();
    console.log(user)

    const logoutUser = async () => {
        // await API.logoutUser()
        logout()
        history.push("/")
    }

    var links;
    var log_in_out_Link;
    if (user.isAuthenticated) {
        links = <><Link to="/Santa">My Secret Santa</Link><Link to="/Profile">{user.name}'s Profile</Link></>;

        log_in_out_Link = <><Button className="nav-link" role="button" onClick={logoutUser}>Log Out</Button></>
    } else {
        links = <><Link to="/info">New here?</Link></>

        log_in_out_Link = <>
            <LoginModal />
        </>
    }

    return (

        <Navbar expand="lg">
            <Container >
                <Navbar.Brand className="p-0 m-0">{ document.location.pathname === "/specialplace" || "/profile" || "/Santa" ? <Image src="sprague.svg" className="sparkLogo" /> :''}</Navbar.Brand>
                <Navbar.Brand><Link to={ user.isAuthenticated ? "/specialplace" : "/" }>Sprague Family</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        
                        
                        {links}
                        {log_in_out_Link}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
   

    )
}
