import React, {Component} from 'react';

import { Nav, Navbar} from "react-bootstrap";



class Header extends Component {
    render() {
        return (
            <div >
                <Navbar className="header-color" >
                    <Navbar.Brand href="/" >Austine Gomez</Navbar.Brand>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutme">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>

                    </Nav>

                </Navbar>
            </div>

        );
    }
}

export default Header;



