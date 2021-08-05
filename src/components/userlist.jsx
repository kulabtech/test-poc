import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserServiceFetch from '../services/userfetchservice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserList extends React.Component {

    constructor(props){

        super(props);

        this.state={
            users:[]
        }    

    }

    componentDidMount() {
        UserServiceFetch.getUsers()
          .then((res) => {
              this.setState({ users: res })
          });

      }


    render() {
        let store = JSON.parse(localStorage.getItem('login'));
        if(store.role==="ROLE_ADMIN")
        {
        return (
            <div class="container">
            <h1 className ="text-center"> Users List</h1>
            <table  className="table table-striped">
                <thead>
                <tr>
                    <td> FIRST NAME</td>
                    <td> LAST NAME </td>
                    <td> EMAIL ID</td>
                    <td> ROLE</td>
                </tr>   
                </thead>  
                <tbody>
                    {
                        this.state.users.map(
                            user =>
                            <tr key={user.emailId}>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.emailId}</td>
                                <td> {user.role}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>  
            </div>            

        );
        }
        else{
            return(<div style={{display:'flex',color:'red'}}><h1>No Access</h1></div>)
        }
    }
}