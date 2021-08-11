import './App.css';
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Homepage from './components/pages/homepage';
import SignUp from './components/pages/signup';
import SignIn from './components/pages/signin';
import ForgotPassword from './components/pages/forgotpassword';
import UserList from './components/userlist';
import { postAPI } from './services/commonService';
function App() {
  const [details, setDetails] = useState({ username: "", password: "", store: null });
  const [log, setLog] = useState(false);
  useEffect(() => {

    let store = JSON.parse(localStorage.getItem('login'));
    setDetails({ ...details, store: store })
    if (store && store.login) {
      setLog(true);
    }
    console.log("in log effect " + log)

  }, [log])

  async function  login(user) {
    setDetails(user);
    const request={ emailID: user.username, password:user.password}
    const url = `login`;
    const result=await postAPI(url, request);
    console.log("result",result);

      // axios({
      //   url: `${API_URL}/authenticate`,
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: JSON.stringify(request),
      // }).then((result) => {
        const {data}=result
        console.warn(result)
        if (data.jwt != null) {
          localStorage.setItem('login', JSON.stringify({
            login: true,
            token: data.jwt,
            role: data.authority[0].authority
          }
          ))
          setLog(true)
          console.log("Login jwt set to " + log)
        }
        else{
          alert("Wrong credentials")
        }
        console.warn("Formdata login update", details)
      // })
  }

  function gLogin(flag){
    if(flag==true)
    {
    setLog(true)
    localStorage.setItem('login', JSON.stringify({
      login: true,
      role:"ROLE_USER"
    }))
    console.warn("gLogin","gLogin")
    }
    else
    setLog(false)

  }
  const Logout = () => {
    console.log("Logout");
    setLog(false);
    console.log("Login set to " + log)
    localStorage.removeItem("login");
  }

  return (

    <div>
      {!(log) ? 
      <div>
        <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' exact component={() =><SignIn Login={login} GLogin={gLogin} />} />
            <Route path="/sign-in" exact component={() =><SignIn Login={login} GLogin={gLogin} />}/>
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </div></Router>
      </div>

        :
        <div>
          <Router>
            <Switch>
              <div>
                <NavBar Logout={Logout}></NavBar>
                <div className="logged-in">
                  <SideBar></SideBar>
                  <div className="view">
                  <Route exact path='/' exact component={Homepage} />
                  <Route exact path='/userlist' exact component={UserList} />
                  </div>
                </div>
                </div>
            </Switch>
          </Router>

        </div>

      }
    </div>
  );


}

export default App;
