import React from "react";
import { Link } from "react-router-dom";

export default class SplashNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu(e){
    const newState = !this.state.show
    this.setState({show: newState})
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
            <button onClick={this.handleMenu} onBlur={this.handleMenu} className="dropdown-button">
              {this.props.currentUser.username}
              <ul onClick={e => e.stopPropagation()} className={this.state.show ? "user-dropdown" : "user-dropdown-hide"}>
                <li className="user-options">Your account</li>
                <li className="user-options">Create a group</li>
                <li className="user-options">Fairness calculators</li>
                <li className="user-options">Contact support</li>
                <li className="user-options" onClick={this.props.logout}>Log out</li>
              </ul>
            </button>
          </div>
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