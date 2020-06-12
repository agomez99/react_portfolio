import React, { Component } from "react";
import {  List, ListItem, ListItemContent } from "react-mdl";
import {Container,Row,Col} from 'react-bootstrap';

class Contact extends Component {
 

  render() {
    return (
      <div className="contact-body">
        <Container className=" contact-grid">
          <Row>
          <Col className="name-avatar" >
            <img
              src="../images/0.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              <h1>Austine Gomez</h1>
            </p>
          </Col>
          </Row>
          <Row>
          
          <Col className="name-avatar" >
            <h2>Contact Me</h2>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    210-589 8981
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    agdevelop3r@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    <a className="link"href="http://linkedin.com/in/austine-gomez">linkedin.com/in/austine-gomez</a> 
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
