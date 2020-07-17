import React, { Component } from "react";
import { Col, Row, Container, Card} from 'react-bootstrap';
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
        <div >
          <Container className="projects">
            <Row className="project-section"  >
              <Col style={{ display: 'flex', margin: "auto", flexDirection: 'row', }}>
                <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/reactEmployee.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <h4>Employee Directory</h4>
          
                  <Card.Text>Application for searching employess in a table using React hooks</Card.Text>
                  <Card.Link href="https://github.com/agomez99/employee_directory_react">Github</Card.Link>
                  <Card.Link href="https://priceless-shockley-44e876.netlify.app/">Deployment</Card.Link>
                  </Card.Body>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/budget.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Budget Tracker</h4>
                  <Card.Text>Application  managing a budget</Card.Text>
                  <Card.Link href="https://github.com/agomez99/budget_tracker">Github</Card.Link>
                  <Card.Link href="https://budgetrakker.herokuapp.com">Deployment</Card.Link>                
                  </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/workout.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Workout Tracker</h4>
                  <Card.Text>Application for tracking workouts using a Mongo database with a Mongoose schema and handles routes with Express</Card.Text>
                  <Card.Link href="https://github.com/agomez99/workout-tracker">Github</Card.Link>
                  <Card.Link href="https://exercisetrac.herokuapp.com/">Deployment</Card.Link>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col style={{ display: 'flex', flexDirection: 'row', }}>
                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/note.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Note Taker</h4>

                  <Card.Text>Application for taking notes with ExpressJS</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Note-Taker">Github</Card.Link>
                  <Card.Link href="https://notestaker2020.herokuapp.com/">Deployment</Card.Link>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/tracker.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Employee Tracker</h4>

                  <Card.Text>An Application for tracking an companys employees</Card.Text>
              <Card.Link href="https://github.com/agomez99/Employee-Tracker">Github</Card.Link>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/day.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Daily Scheduler</h4>
                  <Card.Text>Application for a Daily Schedule tracking each hour</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Daily-Planner">Github</Card.Link>
                  <Card.Link href="https://dailyplanner2020.herokuapp.com">Deployment</Card.Link>
                </Card>
              </Col>
            </Row>

          <Row>
          <Col style={{ display: 'flex', flexDirection: 'row', }}>
            <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/burger.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Eat Da Burger</h4>
                  <Card.Text>Application  using MySQL, Node, Express, Handlebars, homemade ORM, NES.CSS
                    Deployed with JawsDB on Heroku</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Eat-Da-Burger">Github</Card.Link>
                  <Card.Link href="https://powerful-falls-86472.herokuapp.com/">Deployment</Card.Link>                
                  </Card>
                  <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/quiz.jpg)center/ cover",
                    }}>
            </Card.Title>
            <h4>Javascipt Quiz</h4>
                  <Card.Text>A quiz built on vanilla Javascript and HTML</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Javascript-Quiz">Github</Card.Link>
                  <Card.Link href="https://agomez99.github.io/Javascript-Quiz/">Deployment</Card.Link>                
                  </Card>
                  <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/weather.jpg)center/cover",
                    }}>
            </Card.Title>
            <h4>Weather Dashboard</h4>
                  <Card.Text>A Weather Dashboard built with Javascript</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Weather-Dashboard">Github</Card.Link>
                  <Card.Link href="https://agomez99.github.io/Weather-Dashboard/">Deployment</Card.Link>                
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
                      height: "200px",
                      background:
                        "url(images/station.jpg)center/ cover",
                    }}>
            </Card.Title>
                  <h4>Station Trak</h4>
                  <Card.Text>Application for trakcking the ISS using the API</Card.Text>
                  <Card.Link href="https://github.com/agomez99/ISS-Satellite-Tracker">Github</Card.Link>
                  <Card.Link href="https://agomez99.github.io/ISS-Satellite-Tracker/">Deployment</Card.Link>
                </Card>

                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/Kari.jpg)center/ cover",
                    }}>
            </Card.Title>
                    <h4>KariKari</h4>

                  <Card.Text>Pictionary type drawing online game using SocketIO</Card.Text>
                  <Card.Link href="https://github.com/agomez99/Project2Game">Github</Card.Link>
                  <Card.Link href="https://karikari.herokuapp.com/">Deployment</Card.Link>
                </Card>
                <Card style={{ width: '30rem' }}>
                  <Card.Title
                    style={{
                      height: "200px",
                      background:
                        "url(images/codesource.png)center/ cover",
                    }}>
            </Card.Title>
                    <h4>CodeSource</h4>

                  <Card.Text>A blog/tutorial site for coders</Card.Text>
                  <Card.Link href="https://github.com/agomez99/CodeSource">Github</Card.Link>
                  <Card.Link href="https://codesource2.herokuapp.com/">Deployment</Card.Link>
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
