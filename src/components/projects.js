import React, { Component } from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import '../App.css'
import {
  Tabs,
  Tab
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div  >
          <Container className="projects">
            <Row>
              <Col  style={{ display: 'flex', margin: "auto", flexDirection: 'row', }}>
                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/note.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <h4>Note Taker</h4>
                  <Card.Text>Application for taking notes with ExpressJS</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(http://ag2portfolio.herokuapp.com/images/burger.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Eat Da Burger</h4>
                  <Card.Text>Application  using MySQL, Node, Express, Handlebars, homemade ORM, NES.CSS
                    Deployed with JawsDB on Heroku</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/workout.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Workout Tracker</h4>
                  <Card.Text>Application for tracking workouts using a Mongo database with a Mongoose schema and handles routes with Express</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col style={{ display: 'flex', flexDirection: 'row', }}>
                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/note.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <Card.Text>Application for taking notes with ExpressJS</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(http://ag2portfolio.herokuapp.com/images/burger.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <Card.Text>Application  using MySQL, Node, Express, Handlebars, homemade ORM, NES.CSS
              Deployed with JawsDB on Heroku</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/workout.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <Card.Text>Application for tracking workouts using a Mongo database with a Mongoose schema and handles routes with Express</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects">
          <Container >
            <Row>
              <Col className="card" style={{ display: 'flex', margin: "auto", flexDirection: 'row', }}>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "190px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/station.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <h4>Station Trak</h4>
                  <Card.Text>Application for trakcking the ISS using the API</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "176px",
                      background:
                        "url(https://ag2portfolio.herokuapp.com/images/karikari.jpg?crop=entropy&fit=crop&fm=jpg)center/ cover",
                    }}>
            </Card.Title>
                    <h4>KariKari</h4>
                  <Card.Text>Pictionary type drawing online game using SocketIO</Card.Text>
                  <Card.Text><Button colored><a href="url">Github</a></Button></Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );

    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Recent Work</Tab>
          <Tab>Group Projects</Tab>
        </Tabs>
        <Container>
          <Col >
            <div className="content">{this.toggleCategories()}</div>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Projects;
