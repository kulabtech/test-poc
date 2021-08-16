import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link, withRouter } from "react-router-dom";
import { postAPI } from "../../services/commonService";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", store: null };

    this.responseGoogle = this.responseGoogle.bind(this);
    this.login = this.login.bind(this);

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
  componentDidMount() {
    const tokenvalid=JSON.parse(localStorage.getItem('login'))
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    console.log(BASE_URL);
    console.log("log", this.props);
    if (tokenvalid?.login||this.props.log) {
      this.props.history.push("/dashboard");
    }
  }
  async login (e) {
    e.preventDefault()
    console.log("this.state.username",this.state);
    const request = { emailID: this.state.username, password: this.state.password };
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
      this.props.history.push('/dashboard')
    } else {
      alert("Wrong credentials");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form
              onSubmit={(e)=>this.login(e)}
            >
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
