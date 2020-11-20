import React from 'react';
import { Link } from "react-router-dom"
// import { logo } from '../../../app/assets/images/logo.png';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <>
        <div className="session-wrap">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              <p>Log in to Animr</p> 
              <div className="login-form">
                <br />
                  <input type="text"
                    value={this.state.username}
                    placeholder='Username' 
                    onChange={this.update('username')}
                    className="login-input"
                  />
                <br />
                  <input type="password"
                    value={this.state.password}
                    placeholder='Password' 
                    onChange={this.update('password')}
                    className="login-input"
                  />
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
                <br />
                <div className="signup-q">Not yet an Animr? <Link to="/signup" >Sign up here.</Link>
                  {this.renderErrors()}</div>
              </div>
            </form>
          </div>
        </div>
        <div className="log-in-bg"></div>
      </>
    );
  }
}

export default LogInForm;
