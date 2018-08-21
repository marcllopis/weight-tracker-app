import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { firebase } from '../firebase';
import Navigation from './Navigation.jsx';
import LandingPage from './Landing.jsx';
import SignUpPage from './SignUp.jsx';
import SignInPage from './SignIn.jsx';
import PasswordForgetPage from './PasswordForget.jsx';
import HomePage from './Home.jsx';
import AccountPage from './Account.jsx';
import * as routes from '../constants/routes';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => (
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    ));
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
    );
  }
}
export default App;
