import React from "react";
import "./Home.css";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import Footer from "../Footer/Footer.js";
import preferences from "../../images/preferences.svg";
import details from "../../images/details.svg";
import update_both from "../../images/update_both.svg";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-container">
        <div className="hero-section">
          <h3>Welcome To Our Portal</h3>
          <p>Lets make a difference.</p>
          <Link to="/login">
            <Button color="primary">Enter</Button>
          </Link>
        </div>
      </div>
      <div className="wrapped">
        <div className="cards-title">
          <h3>Tools At A Glance</h3>
        </div>
        <div className="cards">
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <br />
            <CardTitle tag="h4">Preferences</CardTitle>
            <CardText>
              With our support employees can display their availability. Simply
              sign in and choose preferred distance.
            </CardText>
            <hr />
            <br />
            <img className="pref" src={preferences} alt="preferences pic" />
          </Card>
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <br />
            <CardTitle tag="h4">Event Details</CardTitle>
            <CardText>
              With our PDF integration, seamlessly access event details. Admins
              can send proposals to employees.
            </CardText>
            <hr />
            <br />
            <img src={details} alt="preferences pic" />
          </Card>
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <br />
            <CardTitle tag="h4">Stay Updated</CardTitle>
            <CardText>
              With our apps ability to update employee preference, simply sign
              in and edit desired distances.
            </CardText>
            <hr />
            <br />
            <img src={update_both} alt="preferences pic" />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
