import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", store: null };

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    if (response.profileObj.email !== null) {
      {
        this.props.GLogin(true);
      }
      // localStorage.setItem('login', JSON.stringify({
      //   login: true,
      //   role:"ROLE_USER"
      // }))
      console.warn("response google true", "response google true");
    } else {
      {
        this.props.GLogin(false);
      }
    }
    console.log(response.profileObj.username);
  }
  componentDidMount(){
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    console.log(BASE_URL);
  }

  render() {
    return (
      <form onSubmit={() => this.props.Login(this.state)}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
            value={this.state.username}
            autoComplete
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            value={this.state.password}
            autoComplete
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        {/* <GoogleLogin
                        clientId="335922090078-0boac3pbnvc05ecjiquskd9lvo2fnh1t.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        //theme="dark"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
        <div className="logged-in ">
          <div className="text-left">
            <Link to="sign-up">Sign Up</Link>
          </div>
          <div className="forgot-password text-right">
            <Link to="forgot-password"> Forgot password?</Link>
          </div>
        </div>
      </form>
    );
  }
}
