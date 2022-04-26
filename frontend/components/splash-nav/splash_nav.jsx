import React from "react";
import { Link } from "react-router-dom";

export default class SplashNav extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const display = this.props.currentUser ? (
      <div className="dashboard-nav">
        <div className="dashboard-logo">
          <img className="dashboard-logo-pic"src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"  alt="" />
          <p>SplitUp</p>
        </div>
        <div className="user-info">
          <img src="" alt="" />
          <div className="dropdown">
            <button className="dropdown-button">{this.props.currentUser.username}</button>
            <div className="user-dropdown">
              <Link>Your account</Link>
              <Link>Create a group</Link>
              <Link>Fairness calculators</Link>
              <Link>Contact support</Link>
              <Link to="/" onClick={this.props.logout}>Log out</Link>
            </div>
          </div>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
      
    ) : (
      <div className="splash-nav-bar">
        <div className="splash-logo">
          <Link to="/" className="splash-link">
            <img className="splash-logo-pic"src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            SplitUp
          </Link>
        </div>
        <div>
          <Link to="/login" className="nav-login">Log in</Link>
          <Link to="/signup" className="nav-signup">
            <button className="nav-signup-button">Sign Up
            </button>
          </Link>
        </div>
      </div>
    )

    return (
      <div>
        {display}
      </div>
    )
  }
}