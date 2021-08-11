import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postAPI } from "../../services/commonService";

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
   e.preventDefault()
    if (this.state.password === this.state.cpassword) {
      const url = `signUp`;
      const data = this.state;
      const response=await postAPI(url, data);
      if(response){
        this.setState({ redirect: "/" });
      }
    } else {
      e.preventDefault();
      alert("Passwords did not match! Please retry!");
      this.setState({ password: "", cpassword: "" });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleRegistrationSubmit(e)}>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              autoComplete="true"
              placeholder="First name"
              onChange={(e) => this.setState({ firstName: e.target.value })}
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              name="lname"
              autoComplete="true"
              placeholder="Last name"
              onChange={(e) => this.setState({ lastName: e.target.value })}
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              autoComplete="true"
              placeholder="Enter email"
              onChange={(e) => {
                this.setState({ emailId: e.target.value });
              }}
              value={this.state.emailId}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => this.setState({ cpassword: e.target.value })}
              value={this.state.cpassword}
            />
          </div>
          <div className="form-group">
            <div className="dd-header">
              <div className="dd-header-title">Role</div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light btn-outline-secondary  mr-2"
                onClick={() => this.setState({ role: "admin" })}
              >
                Admin
              </button>
              <button
                type="button"
                className="btn btn-light btn-outline-secondary  mr-2"
                onClick={() => this.setState({ role: "user" })}
              >
                User
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <div className="forgot-password text-right">
            Already registered <Link to="/"> sign in?</Link>
          </div>
        </form>
      </div>
    );
  }
}
