
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
    const header = this.props.formType === "login" ? "Log In" : "Sign Up";
    const path = this.props.formType === "login" ? "/signup" : "/login";
    const linkLabel = this.props.formType === "signup" ? "Log In" : "Sign Up";
    const errors = this.props.errors;
    return (
      <div>
        <h1>{header}</h1>
        <form>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <Link to={path}>{linkLabel}</Link>
        {errors.map(error => <p>{error}</p>)}
      </div>
    )
  }

}

export default SessionForm;