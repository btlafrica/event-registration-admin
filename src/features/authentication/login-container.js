import React, { useState } from "react";
import './_login.css'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
// import { EmailAddress, Password, SignIn } from "../../constant";

import { getError, getLoading } from "./authentication-reducer";
import { login } from "./authentication-saga";
import { compose } from "ramda";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state),
});

const LoginContainer = compose(
  connect(mapStateToProps, {
    login,
  })
)(({ loading, login, error }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(values);
  };
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };
 

  return (
    <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card">
            <div>
              <div className="logo">
                {/* <img
                  className="img-fluid for-light"
                  src={require("../../assets/images/logo/dllogo.svg")}
                  alt=""
                />
                <img
                  className="img-fluid for-dark"
                  src={require("../../assets/images/logo/dllogo.svg")}
                  alt=""
                /> */}
              </div>
              <div className="login-main login-tab">
                <Form onSubmit={onSubmit} className="theme-form">
                  <p>{"Enter your email & password to login"}</p>
                  <FormGroup>
                    <Label className="col-form-label">EmailAddress</Label>
                    <Input
                      className="form-control"
                      type="email"
                      required
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Password</Label>
                    <Input
                      name="password"
                      className="form-control"
                      type={togglePassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      required
                      placeholder="*********"
                    />
                    <div
                      className="show-hide"
                      onClick={() => HideShowPassword(togglePassword)}
                    >
                      <span className={togglePassword ? "" : "show"}></span>
                    </div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <Button
                      disabled={loading}
                      color="primary"
                      type="submit"
                      className="btn-block"
                    >
                      {!loading ? 'SignIn' : "Signing in"}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
});

export default LoginContainer;
