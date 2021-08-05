// import logo from './logo.svg';
import React from 'react';
import './homepage.css';
// import Navbar from './components/navbar';
// import {table } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import logo from '../assets/logo.jpg';
// import logo from '../assets/logo.jpg';
function Homepage() {
  return (
<>



<div className="container">
    
<div id="asg">Internal Announcements</div>
<div id ="b">Ask ABIe</div>
<p>Get updated on market appetite, ABI products and all the latest enhancements and resources. Please provide your feedback using the links inside ABIe.
  {/* <Link href="https://www.allstate.com/">What's New in ABIe</Link> */}
</p>
<div id="b" >Enhanced Agency Support Available at (800)729-3005</div>
<p>Allstate Business Insurance (ABI) offers enhanced support to you as you transition to new products,pricing and the Connexus/Commercial Agent platforms. Call (800) 729-300 for access to Business Insurance experts by using the following prompts:

  <br/>
  <p>+ For the Agency Contact Center, press 1</p>
  <br/>
  <p>+ For technology support from Allstate Technology Support Center, press 2 (agents with direct underwriting access, press 5)</p>
  <br/>
  <p>+ If you know your party's extension, press 8 (agents with direct underwriting access, press 6)</p>

</p>
<br/>
<div id="b">Get Connexus help with the ABI Agency Contact Center</div>
<br/>
<div className="card">
              <div className="card-body">
                <h5 className="card-title" id ="asg">Last Accessed Policies</h5>
                <div className="card-text">

<table className="table table-striped table-hover">
  
    <tbody>
      <tr id ="asg">
    
      <td>Name</td>
      <td>Line</td>
      <td>Policy/Quote</td>
      <td>Premium</td>
      <td>Effective</td>
      <td>Trans Type</td>
      <td>Accessed</td>
    </tr>
    <tr>
      <td>KIE LEE</td>
      <td>Businessowners</td>
      <td>3455957 01</td>
      <td>$0</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>04/15/19</td>
    </tr>
    <tr>
    <td>TEST</td>
      <td>Commercial Automobile</td>
      <td>3455887 01</td>
      <td>$855</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>10/15/19</td>
    </tr>
    <tr>
    <td>KIE LEE</td>
      <td>Businessowners</td>
      <td>3455957 01</td>
      <td>$0</td>
      <td>01/01/19</td>
      <td>New Business Quote</td>
      <td>04/15/19</td>
    </tr>
   
  </tbody>
</table>
</div>
</div>
</div>


<div className="card">
              <div className="card-body">
                <h5 className="card-title" id ="asg">My Assignments</h5>
                <div className="card-text">
<table className="table table-striped table-hover">
  {/* <thead id="asg">
    My Assignments
  </thead> */}
  <tbody>
    There are no items to show in this view.
  </tbody>
  </table>
  </div>
  </div>
  </div>

</div>



</>
  );
}

export default Homepage;
