import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';

import * as routes from '../constants/routes';
import { auth } from '../firebase';


// TODO: move the signUpForm to other folder

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>
);

SignUpPage.propTypes = {
  history: shape({}).isRequired,
};

// TODO: CHeck if it is worth to initalize a state like this
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  storeFormValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;
    const { history } = this.props;
    // sent the email and pass to firebase
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      // if success clear the state and render home page
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      // if fails store the error on the state
      .catch(error => this.setState({
        ...this.state,
        error,
      }));

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo
    || passwordOne === ''
    || email === ''
    || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          name="username"
          onChange={this.storeFormValues}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          name="email"
          onChange={this.storeFormValues}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          name="passwordOne"
          onChange={this.storeFormValues}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          name="passwordTwo"
          onChange={this.storeFormValues}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {/* will print an error if there is one */}
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// TODO: Check if React-router-proptypes is worth
SignUpForm.propTypes = {
  history: shape({}).isRequired,
};

export default withRouter(SignUpPage);
