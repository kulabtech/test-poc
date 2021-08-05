import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component {

    render() {
        return (
            <React.Fragment>
                
      <div className="sidenav">
        <div className="heading">
          <label className="h">Commercial Agent</label>
          <a href="#commercialagent">Commercial Agent</a>
          <label className="h">I Want To</label>
          <a href="#makepayment">Make Payment</a>
          <a href="#reprintacertificateofinsurance">Reprint a Certificate of Insurance</a>
          <a href="#reprintanautoidcard">Reprint an Auto ID card</a>
          <a href="#changeinsuredmailingaddress">Change Insured Mailing Address</a>
          <a href="#addchangedeletevehicle">Add, Change, Delete Vehicle</a>
          <a href="#addchangedeletedriver">Add, Change, Delete Driver</a>
          <a href="#addchangedeleteadditionalintrest">Add, Change, Delete Additional Intrest</a>
          <label className="h">Insured Information</label>
          <a href="#policysnapshot">Policy Snapshot</a>
          <a href="#policyview">Policy View</a>
          <a href="#viewpolicydocuments">View Policy Documents</a>
          <a href="#billinginquiry">Billing Inquiry</a>
          <a href="#enrollEZP/RCC">Enroll EZP/RCC</a>
          <label className="h">Activity</label>
          <a href="#createqueue">Create Queue</a>
          <a href="#policychange">Policy Change</a>
          <a href="#termination">Termination</a>
          <a href="#policy">Policy</a>
          <a href="#billing">Billing</a>
          <a href="#reports">Reports</a>
          <a href="#assignments">Assignments</a>
          <label className="h">Links</label>
          <a href="#isonet">ISONet</a>
          <a href="#sage/referenceconnect">SAGE/Reference COnnect</a>
          <a href="#EDMS">EDMS</a>
          <a href="#Manta">Manta</a>
          <a href="#connexureconnection">Connexure Connection</a>
          <a href="#passwordresetsite" style={{marginBottom: '50px'}}>Password Reset Site</a>
        </div>
      </div>
    

            </React.Fragment>
        );
    }
}

export default SideBar;