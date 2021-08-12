import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../navbar";
import SideBar from "../sidebar";

const CommonFile = (props) => {
    console.log("props",props);
  const Logout = () => {
    localStorage.removeItem("login");
    props.history.push('/')
  };
  return (
      <div>
    <div>
      <NavBar Logout={Logout}></NavBar>
      <div className="logged-in">
        <SideBar />
        <div className="view">
          {props.children}
          {/* <Route exact path="/dashboard" exact component={Homepage} />
          <Route exact path="/userlist" exact component={UserList} /> */}
        </div>
      </div>
    </div>
    </div>
  );
};
export default withRouter(CommonFile);
