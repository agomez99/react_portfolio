import React, { Component } from "react";
import "./App.css";
import { Layout, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div >

<Navbar className="header-color" >
    <Navbar.Brand href="#home" >Austine Gomez</Navbar.Brand>
    <Nav className="justify-content-end" style={{ width:"100%"}}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>

    </Nav>
 
  </Navbar>


        <Layout  >

          <Drawer title="Title">
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contacts</Link>
            </Nav>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
