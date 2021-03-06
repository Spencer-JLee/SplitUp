import React from "react";
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(type) {
    return (e) => (
      this.setState({
        [type]: e.target.value
      })
    )
  }

  handleDemo(e){
    e.preventDefault;
    this.props.processForm({email: "demo_user@gmail.com", password: "password"})
  }

  handleErrors(){
    const errors = this.props.formType === "login" ? (
      <div className="login-errors">
        Whoops! We couldn't find an account for that email address and password.
        Maybe you've forgotten your password?
      </div>
    ) : (
      <div className="signup-errors">
        <p>The following errors occurred: </p>
        <ul>
          {this.props.errors.map(error => <li key={Math.random() * 10000}>{error}</li>)}
        </ul>
      </div>
    )

    return (
      <div>
        {errors}
      </div>
    )
  }

  render() {
    const form = this.props.formType === "login" ? (
      <div className="login">
        {this.props.errors.length > 0 ? this.handleErrors() : ''}
        <div className="login-container">
          <h1 className="login-title">Log in</h1>
          <form action="" className="login-form">
            <label htmlFor="" className="email-label">Email address
              <input className="text-input" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
            </label>
            <label htmlFor="" className="password-label">Password
              <input className="text-input" type="password" value={this.state.password} onChange={this.handleInput("password")}/>
            </label>
            <button className="login-button" onClick={this.handleSubmit}>Log In</button>
            <button className="demo-button" onClick={this.handleDemo}>Try with a demo</button>
          </form>
          
        </div>
      </div>
    ) : (
      <div className="signup">
        <div className="signup-container">
          <div>
            <Link to="/">
              <img className="splitwise-logo"src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            </Link>
          </div>
          <div className="signup-form-container">
            <h2 className="introduce">INTRODUCE YOURSELF</h2>
            {this.props.errors.length > 0 ? this.handleErrors() : ''}
            <form action="" className="signup-form">
              <label className="hi">Hi there! My name is</label>
              <input className="username-input" type="text" value={this.state.username} onChange={this.handleInput("username")}/>
              <div className="other-info">
                <label>
                  Here's my <strong>email address</strong>:
                  <input className="email-input" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                </label>
                <label>
                  And here's my <strong>password</strong>:
                  <input className="password-input" type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                </label>
              </div>
              <button className="signup-button" onClick={this.handleSubmit}>Sign me up!</button>
            </form>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        {form}
      </div>
    )
  }

}

export default SessionForm;