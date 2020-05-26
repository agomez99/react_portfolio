import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ag2portfolio.herokuapp.com/images/note.jpg)center/ cover",
              }}
            >
             Note Taker
            </CardTitle>
            <CardText>Application for taking notes with ExpressJS</CardText>
            <CardActions border>
            <Button colored><a href="url">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ag2portfolio.herokuapp.com/images/station.jpg)center/ cover",
              }}
            >
              Group Project
            </CardTitle>
            <CardText>Application for Tracking the International Space Station with an API</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ag2portfolio.herokuapp.com/images/workout.jpg)center/ cover",
              }}
            >
              React Project
            </CardTitle>
            <CardText>Application for tracking workouts</CardText>
            <CardActions border>
              <Button colored><a href="url">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png)center/ cover",
            }}
          >
            React Project
          </CardTitle>
          <CardText>xxxxxxxxxxxxxx</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png)center/ cover",
            }}
          >
            React Project
          </CardTitle>
          <CardText>xxxxxxxxxxxxxx</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png)center/ cover",
            }}
          >
            React Project
          </CardTitle>
          <CardText>xxxxxxxxxxxxxx</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
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
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
