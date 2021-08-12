import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
  withRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Homepage from "./components/pages/homepage";
import SignUp from "./components/pages/signup";
import SignIn from "./components/pages/signin";
import ForgotPassword from "./components/pages/forgotpassword";
import UserList from "./components/userlist";
import { postAPI } from "./services/commonService";
function App(props) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    store: null,
  });
  const [log, setLog] = useState(false);
  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("login"));
    setDetails({ ...details, store: store });
    if (store && store.login) {
      setLog(true);
    }
    console.log("in log effect " + log);
  }, [log]);

  async function login(user) {
    setDetails(user);
    const request = { emailID: user.username, password: user.password };
    const url = `login`;
    const result = await postAPI(url, request);
    console.log("result", result);
    const { data } = result;
    console.warn(result);
    if (data.jwt != null) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: true,
          token: data.jwt,
          role: data.authority[0].authority,
        })
      );
      setLog(true);
      // this.props.history.push('/dashboard')
      console.log("Login jwt set to " + props);
    } else {
      alert("Wrong credentials");
    }
    console.warn("Formdata login update", details);
    // })
  }

  function gLogin(flag) {
    if (flag == true) {
      setLog(true);
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: true,
          role: "ROLE_USER",
        })
      );
      console.warn("gLogin", "gLogin");
    } else setLog(false);
  }
  // const Logout = () => {
  //   console.log("Logout");
  //   setLog(false);
  //   console.log("Login set to " + log);
  //   localStorage.removeItem("login");
  // };

  return (
    <div>
      <Router>
        {/* <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner"> */}
              <Switch>
                <Route exact path="/" exact component={SignIn} />
                <Route path="/sign-in" exact component={() => <SignIn Login={login} GLogin={gLogin} />} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
                <Route exact path="/userlist" exact component={UserList} />
                <Route exact path="/dashboard" exact component={Homepage} />
              </Switch>
            {/* </div>
          </div>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
