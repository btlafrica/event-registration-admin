import React, { useState } from "react";
import "./_login.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
// import { EmailAddress, Password, SignIn } from "../../constant";
import Button from '../../components/buttons/button'
import { getError, getLoading } from "./authentication-reducer";
import { login } from "./authentication-saga";
import { compose } from "ramda";
import { connect } from "react-redux";
import { Logo, top, bottom } from "../../assets";
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
    <div className=" flex items-center h-screen justify-center">
      <div className="flex flex-col">
        {/* <img src={top} className=" absolute top-0 -left-32 " /> */}
        {/* <img src={bottom} className=" absolute bottom-0 -right-10 z-0 " /> */}
        <div className="px-5 shadow-xl rounded-5 py-12 z-10 ">
          <div className=" flex justify-center my-4">
            <Logo />
          </div>
          <Form onSubmit={onSubmit} className="theme-form">
            <p className="font-bold text-dark text-2xl">Sign in</p>
            <p>Please sign in to your account and start theadventure.</p>
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
              {/* <div
                className="show-hide"
                onClick={() => HideShowPassword(togglePassword)}
              >
                <span className={togglePassword ? "" : "show"}></span>
              </div> */}
            </FormGroup>
            <div className="form-group mb-0">
              <Button
                disabled={loading}
                color="primary"
                type="submit"
                className="btn-block"
              >
              <p className="text-white">  {!loading ? "SignIn" : "Signing in"}</p>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
});

export default LoginContainer;
