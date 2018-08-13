import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';

import { auth } from '../firebase';
import * as routes from '../constants/routes';


const SignInPage = ({ history }) => (
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
  </div>
);

SignInPage.propTypes = {
  history: shape({}).isRequired,
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
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
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => this.setState({
        ...this.state,
        error,
      }));

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = password === ''
    || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          name="email"
          onChange={this.storeFormValues}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          name="password"
          onChange={this.storeFormValues}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

SignInForm.propTypes = {
  history: shape({}).isRequired,
};


export default withRouter(SignInPage);
