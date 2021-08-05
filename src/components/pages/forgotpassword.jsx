import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {

    constructor(props){

        super(props);

        this.state={username: "", store: null}
        }
    
    render() {
        return (
                <form onSubmit={()=>this.props.Login(this.state)}>
            <h3>Forgot Password</h3>

            <div className="form-group" >
              <label>Email address</label>
              <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(e) => { this.setState( {username: e.target.value }) }} value={this.state.username} autoComplete />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>


          </form>
        );
    }
}
