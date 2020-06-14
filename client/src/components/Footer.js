import React, {Component} from 'react';
import ModalFooter from "react-bootstrap/ModalFooter"
import Nav from 'react-bootstrap/Nav'

class Footer extends Component {
    render() {
        return (
            <div>
                <ModalFooter>
                <Nav.Link href="/">Home</Nav.Link> Austine Gomez 2020
                </ModalFooter>

            </div>

        );
    }
}

export default Footer;
