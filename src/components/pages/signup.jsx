import { Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postAPI } from "../../services/commonService";
import { Input } from "./commonInput";
import * as Yup from "yup";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      cpassword: "",
      role: "user",
      redirect: null,
    };

    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }
  async handleRegistrationSubmit(e) {
    const url = `signUp`;
    const response = await postAPI(url, e);
    if (response) {
      this.setState({ redirect: "/" });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    let initialValues = {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      cpassword: "",
      role: "",
    };
    let validate = Yup.object().shape({
      firstName: Yup.string().required("Please enter your full name"),
      lastName: Yup.string().required("Please enter your full name"),
      emailId: Yup.string()
        .email("Please enter a valid emailId")
        .required("Please enter a valid emailId"),
      password: Yup.string().required("Please Enter your password"),
      cpassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Passwords do not match"),
      role: Yup.string().required("Select any role"),
    });

    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <div>
              <h3>Sign Up</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(values, actions) => {
                  this.handleRegistrationSubmit(values, actions);
                }}
              >
                {(props) => {
                  const { setFieldValue } = props;
                  return (
                    <Form onSubmit={props.handleSubmit} className="formdiv">
                      <Input
                        name="firstName"
                        id="firstName"
                        placeholder="John"
                        label="Enter Firstname"
                        value={props.values.firstName}
                      />
                      <Input
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        label="Enter Lastname"
                        value={props.values.lastName}
                      />
                      <Input
                        name="emailId"
                        id="emailId"
                        placeholder="example@emailId.com"
                        label="Enter Email address"
                        value={props.values.emailId}
                      />
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        label="Enter Password"
                        value={props.values.password}
                      />
                      <Input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        placeholder="******"
                        label="Enter Confirm Password"
                        value={props.values.cpassword}
                      />
                      <Field name={"role"}>
                        {({
                          field: { name, value, onChange, onBlur },
                          form: { touched, errors },
                          meta,
                        }) => (
                          <div>
                            <div className="form-group">
                              <div className="dd-header">
                                <div className="dd-header-title">Role</div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-light btn-outline-secondary  mr-2"
                                  onClick={() => {
                                    setFieldValue("role", "admin");
                                  }}
                                >
                                  Admin
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-light btn-outline-secondary  mr-2"
                                  onClick={() => {
                                    setFieldValue("role", "user");
                                  }}
                                >
                                  User
                                </button>
                              </div>
                            </div>
                            {meta.touched && meta.error && (
                              <p style={{ color: "red" }}>{meta.error}</p>
                            )}
                          </div>
                        )}
                      </Field>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                      <div className="forgot-password text-right">
                        Already registered <Link to="/"> sign in?</Link>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
