import './App.css';
import React, { Component } from 'react';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import MainPage from '../Main/Main';
import MathPage from '../Math/Math';


class App extends Component {
  constructor() {
    super();
    this.state = {

      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>

      <Switch>
      <Route exact path='/' render={() =>
        <MainPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
      }/>
      <Route exact path='/math' render={() =>
        <MathPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
      }/>

      <Route exact path='/signup' render={() => 
            <SignupPage
              handleSignupOrLogin={this.handleSignupOrLogin}
            />      
      }/>

      <Route exact path='/login' render={() => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
      }/>
</Switch>
      </div>
    );
  }
}


export default App;
