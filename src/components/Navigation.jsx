import React from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';

import AuthUserContext from './AuthUserContext.jsx';
import SignOutButton from './SignOut.jsx';
import * as routes from '../constants/routes';


const NavigationAuth = () => (
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
  </ul>
);

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

Navigation.propTypes = {
  authUser: shape({}),
};


export default Navigation;
