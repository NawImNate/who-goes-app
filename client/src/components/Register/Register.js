import "./Register.css";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { ReactComponent as Team } from "../../images/team.svg";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";

export default function Register() {
  // State to store form's data as object
  const [formData, setFormData] = useState({});

  // update input function that takes in inputted values to store them as setFormData states' object.
  const updateInput = (e) => {
    setFormData({
      // spread array of forms data
      ...formData,
      // specify the events name and value as key value pair.
      [e.target.name]: e.target.value,
    });
  };

  // handlesubmit function, takes in event, doesnt allow for refresh on submit, and sets form data as inputted objects' target names(email, pw, fn, ln). CL the result of the formData
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
    console.log(formData);
  };

  return (
    <div className="register-page-container">
      <div className="register-form-container">
        <div className="register-pic-container">
          <Team className="register-team-pic" />
        </div>
        <Form className="register-form" onSubmit={handleSubmit}>
          <h3 className="register-form-title">Create Account</h3>
          <hr className="register-title-hr" />
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="register-email"
              name="email"
              placeholder="neville@hogwarts.edu"
              type="email"
              onChange={updateInput}
              value={formData.email || ""}
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="register-password"
              name="password"
              placeholder="********"
              type="password"
              onChange={updateInput}
              value={formData.password || ""}
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="register-firstName"
              name="firstName"
              placeholder="Neville"
              type="text"
              onChange={updateInput}
              value={formData.firstName || ""}
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="register-lastName"
              name="lastName"
              placeholder="Longbottom"
              type="text"
              onChange={updateInput}
              value={formData.lastName || ""}
              required={true}
            />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
          <FormGroup className="redirect-container">
            <Label className="login-redirect-message">
              Have an account? | <Link to="/login/">Sign In</Link>
              <link />
            </Label>
          </FormGroup>
        </Form>
      </div>
      <div>
        <Footer className="register-footer" />
      </div>
    </div>
  );
}
