import React from "react";
import "./Login.css";
import Footer from "../Footer/Footer.js";
import "../Footer/Footer.js";
import { ReactComponent as Cats } from "../../images/cats.svg";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="right-cats">
          <Cats className="cats" />
        </div>
        <div className="login-form-contianer">
          <Form className="login-form">
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
            <Button>Submit</Button>
            <FormGroup className="signup">
              <Label className="redirect-message">
                Can't login? | <Link to="/register">Register Here</Link>
                <link />
              </Label>
            </FormGroup>
          </Form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
