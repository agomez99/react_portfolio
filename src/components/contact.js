import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Form, Button } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    //console.log(event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <div className=" contact-body">
        <Grid className=" contact-grid">
          <Cell col={6}>
            <h2>Austine Gomez</h2>
            <img
              src="https://ag2portfolio.herokuapp.com/images/avataaars.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              filllllllllllllllllllllllllllllllll
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

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
                    linkedin.com/in/austine-gomez
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>

        <Grid>
          <Cell col={12}>
            <div className="contact-form">
              <h1>Contact Me</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label
                    htmlFor="full-name"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      paddingRight: "20px",
                    }}
                  >
                    Full name
                  </Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label
                    htmlFor="email"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      paddingRight: "30px",
                    }}
                  >
                    {" "}
                    Email
                  </Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="message" 
                  style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      paddingRight: "20px",
                    }}> 
                    Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    row="8"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  className="d-inline-block"
                  variant="primary"
                  type="submit"
                  disabled={this.state.disabled}
                >
                  Send
                </Button>

                {this.state.emailSent === true && (
                  <p className="d-inline success-msg">Email Sent</p>
                )}
                {this.state.emailSent === false && (
                  <p className="d-inline err-msg">Email Not Sent</p>
                )}
              </Form>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
