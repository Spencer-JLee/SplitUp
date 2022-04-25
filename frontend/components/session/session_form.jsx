
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

  render() {
    // const header = this.props.formType === "login" ? "Log In" : "Sign Up";
    // const path = this.props.formType === "login" ? "/signup" : "/login";
    // const linkLabel = this.props.formType === "signup" ? "Log In" : "Sign Up";
    // const errors = this.props.errors;
    // let username;

    const form = this.props.formType === "login" ? (
      <div className="login">
        <div className="login-container">
          <div className="login-form">
            <div className="login-title">Log in</div>
            <form action="">
              <label htmlFor="">Email Address</label>
              <div className="input-title">
                <input className="text-input" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
              </div>
              <label htmlFor="">Password</label>
              <div className="input-title">
                <input className="text-input" type="password" value={this.state.password} onChange={this.handleInput("password")}/>
              </div>
              <div className="login-button-div">
                <input className="login-button" type="submit" value="Log In" onSubmit={this.handleSubmit}/>
              </div>
            </form>
            <a href="" className="forgot">Forgot Your Password?</a>
            <div className="or-div">
              <hr className="inline-block"/>
              <div className="or">or</div>
              <hr className="inline-block"/>
            </div>
            <div className="demo-div">
              <a href="" className="demo">Try with a Demo</a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div></div>
        <div>
          <a href=""></a>
          <div>
            <h2>Introduce yourself</h2>
            <form action="">
              <div>Hi there! My name is</div>
              <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
              <div>
                <div>
                  Here's my <strong>email address</strong>:
                  <br />
                  <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                </div>
                <div>
                  And here's my <strong>password</strong>:
                  <br />
                  <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                </div>
              </div>
              <div>
                <input type="submit" value="Sign me up!" onSubmit={this.handleSubmit}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )

    // if(this.props.formType === 'signup'){
    //   username = (
    //     <label>Username: 
    //       <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
    //     </label>
    //   )
    // }

    return (
      <div>
        {/* <h1>{header}</h1>
        <form>
          {username}
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
          </label>
          <button onClick={this.handleSubmit}>{header}</button>
        </form>
        <Link to={path}>{linkLabel}</Link>
        {errors.map(error => <p>{error}</p>)} */}
        {form}
      </div>
    )
  }

}

export default SessionForm;