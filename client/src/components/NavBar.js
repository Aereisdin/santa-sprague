import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import LoginModal from './ModalLogin';
import API from '../utils/API';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

export default function NavBar() {

    const { user, logout } = useContext(UserContext);
    const history = useHistory();
    console.log(user)

    // const logout = async () => {
    //     // Make a POST request to destroy the session on the back end
    //     await fetch('/api/users/logout', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //     }).then(res => {
    //         logout(false, '')
    //     })
    //         .then(document.location.replace('/'))
    //         .catch(err => { console.error(err) })
    // };

    const logoutUser = async () => {
        await API.logoutUser()
        logout()
        history.push("/")
    }

    var links;
    var log_in_out_Link;
    if (user.isAuthenticated) {
        links = <><Nav.Link to="/profile">My Secret Santa</Nav.Link></>;

        log_in_out_Link = <><Link className="nav-link" aria-current="page" data-bs-toggle="modal" to="#modal" role="button" onClick={logoutUser}>Link</Link></>
    } else {
        links = ''

        log_in_out_Link = <>
            <LoginModal />
        </>
    }

    return (

        <Navbar expand="lg">
            <Container className="justify-content-between">
                <Navbar.Brand className="p-0 m-0">{ document.location.pathname === "/specialplace" ?<Image src="sprague.svg" className="sparkLogo" /> :''}</Navbar.Brand>
                <Navbar.Brand><Nav.Link href="/">Sprague Family</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/info">New here?</Nav.Link>
                        <Nav.Link href="/specialplace">User Profile</Nav.Link>
                        {links}
                        {log_in_out_Link}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // Nav code from main.handlebars modified with conditionals extracted as variables
   

    )
}
