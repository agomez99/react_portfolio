import React, { Component } from "react";
import {  List, ListItem, ListItemContent } from "react-mdl";
import {Container,Row,Col} from 'react-bootstrap';
import ParticlesBg from "particles-bg";

class Contact extends Component {
 

  render() {
    return (
      <div className="contact-body">
       <ParticlesBg type="square" bg={true} />

        <Container className=" contact-grid">
          <Row>
          <Col className="name-avatar" >
            <img
              className="pic"
              src="../images/0.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
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
