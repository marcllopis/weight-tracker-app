import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation.jsx';
import LandingPage from './Landing.jsx';
import SignUpPage from './SignUp.jsx';
import SignInPage from './SignIn.jsx';
import PasswordForgetPage from './PasswordForget.jsx';
import HomePage from './Home.jsx';
import AccountPage from './Account.jsx';
import * as routes from '../constants/routes';


const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr/>
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

export default App;
