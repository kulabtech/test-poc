import { Form, Formik } from "formik";
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link, withRouter } from "react-router-dom";
import { postAPI } from "../../services/commonService";
import { Input } from "./commonInput";
import * as Yup from "yup";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", store: null };
    // this.responseGoogle = this.responseGoogle.bind(this);
    this.login = this.login.bind(this);
  }

  // responseGoogle(response) {
  //   if (response.profileObj.email !== null) {
  //     {
  //       this.props.GLogin(true);
  //     }
  //     // localStorage.setItem('login', JSON.stringify({
  //     //   login: true,
  //     //   role:"ROLE_USER"
  //     // }))
  //     console.warn("response google true", "response google true");
  //   } else {
  //     {
  //       this.props.GLogin(false);
  //     }
  //   }
  //   console.log(response.profileObj.username);
  // }
  componentDidMount() {
    const tokenvalid = JSON.parse(localStorage.getItem("login"));
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    console.log(BASE_URL);
    if (tokenvalid?.login || this.props.log) {
      this.props.history.push("/dashboard");
    }
  }

  async login(e) {
    console.log(e);
    const request = {
      emailID: e.email,
      password: e.password,
    };
    const url = `login`;
    const result = await postAPI(url, request);
    const { data } = result;
    if (data.jwt != null) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: true,
          token: data.jwt,
          role: data.authority[0].authority,
        })
      );
      this.props.history.push("/dashboard");
    } else {
      alert("Wrong credentials");
    }
  }

  render() {
    let initialValues = {
      password: "",
      email: "",
    };
    let validate = Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
      password: Yup.string().required("Please Enter your password"),
    });
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>Sign In</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(values, actions) => {
                this.login(values, actions);
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit} className="formdiv">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    label="Enter Email"
                    value={props.values.email}
                  />
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******"
                    label="Enter Password"
                    value={props.values.password}
                  />
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                  <div className="logged-in ">
                    <div className="text-left">
                      <Link to="sign-up">Sign Up</Link>
                    </div>
                    <div className="forgot-password text-right">
                      <Link to="forgot-password"> Forgot password?</Link>
                    </div>
                  </div>
                  
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
