
import React from "react";
import {Link} from "react-router-dom";

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
    this.props.processForm(user).then(() => 
    this.props.history.push('/'), 
    (errors) => this.props.receiveErrors(errors.responseJSON));
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
    this.props.processForm({email: "Potato", password: "Potato"})
  }

  render() {
    const form = this.props.formType === "login" ? (
      <div className="login">
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
        <div></div>
        <div className="signup-container">
          <a href="" className="splitwise-logo"></a>
          <div className="signup-form-container">
            <h2>Introduce yourself</h2>
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
              <button className="signup-button" onClick={this.handleSubmit}>Sign Up</button>
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