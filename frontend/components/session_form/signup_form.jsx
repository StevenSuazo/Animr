import React from 'react';
import { Link } from "react-router-dom"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      visibility: "visibility",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHidePass = this.toggleHidePass.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  toggleHidePass(event) {
    event.preventDefault();
    let pass = document.getElementsByClassName('pinput');
    if (pass[0].type === "text") {
      pass[0].type = "password";
      this.setState({ visibility: "visibility" })
    } else {
      pass[0].type = "text";
      this.setState({ visibility: "visibility_off" })
    }
  }

  render() {
    return (
      <>
        <div className="session-wrap">
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br />
              <img src={window.logo} className="icon-logo" />
              <p>Sign up for Animr</p> 
              <div className="login-form">
                <br />
                  <input type="text"
                    autoFocus
                    value={this.state.email}
                    placeholder='Email' 
                    onChange={this.update('email')}
                    className="login-input"
                  />
                <br />
                  <input type="text"
                    value={this.state.username}
                    placeholder='Username' 
                    onChange={this.update('username')}
                    className="login-input"
                  />
                <br />
                <div className="password-outer">
                  <div className="password">
                    <input type="password"
                      value={this.state.password}
                      placeholder='Password'
                      onChange={this.update('password')}
                      className="pinput"
                    />
                    <div
                      className="visibility"
                      onClick={this.toggleHidePass}>
                      <i className="material-icons">{this.state.visibility}</i>
                    </div>
                  </div>
                </div>
                <input className="session-submit-up" type="submit" value={this.props.formType} />
                <div className="login-q">Already an Animr? <Link to="/login" >Log in here.</Link></div>
                <div>{this.renderErrors()}</div>
              </div>
            </form>
          </div>
        </div>
        <div className="log-in-bg"></div>
      </>
    );
  }
}

export default SignUpForm;

