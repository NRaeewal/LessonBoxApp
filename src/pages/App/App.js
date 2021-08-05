import './App.css';
import React, { Component } from 'react';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import lessonService from '../../utils/lessonService';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import MainPage from '../Main/Main';
import MathPage from '../Math/Math';
import LanguagePage from '../LanguageArts/LanguageArts';
import SocialPage from '../Social/SocialPage';
import SciencePage from '../Science/SciencePage';
import CreatePage from '../CreatePage/CreatePage';
import EditPage from '../EditPage/EditPage';


import OtherPage from '../Other/OtherPage';

class App extends Component {
  constructor() {
    super();
    this.state = {

      lessons: [],
      newLessons: [''],

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

  handleUpdateLessons = (lessons) => {
    this.setState({lessons})
  }
  
  async componentDidMount() {
    const lessons = await lessonService.index();
    this.setState({lessons});
  }


handleDeleteLessons = async (id) => {
  const lessonPlans = await lessonService.deleteLesson(id)
  // const lessons = Object.assign([], this.state.lessons);
  // lessons.splice(index, 1)
  this.setState({lessons: lessonPlans})
}

firstLesson() {
  const first = this.state.lessons[0]
  return {first}
}


  render() {
    return (
      <div>

      <Switch>
      <Route exact path='/' render={() =>
        <MainPage
        lessons={this.state.lessons}
        firstLesson={this.firstLesson}
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
      }/>
      <Route exact path='/math' render={() =>
        <MathPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        handleDeleteLessons={this.handleDeleteLessons}
        />
      }/>
      
      <Route exact path='/la' render={() =>
      <LanguagePage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        handleDeleteLessons={this.handleDeleteLessons}
        />


      }/>
      <Route exact path='/social' render={() =>
        <SocialPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        />
      }/>
      <Route exact path='/science' render={() =>
        <SciencePage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        />
      }/>
        <Route exact path='/other' render={() =>
        <OtherPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        />
      }/>
        <Route exact path='/create' render={(props) =>
        <CreatePage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        history = {props.history}
        />
      }/>
        <Route exact path='/update/:id' render={(props) =>
        <EditPage
        user={this.state.user}
        handleLogout={this.handleLogout}
        lessons={this.state.lessons}
        handleUpdateLessons={this.handleUpdateLessons}
        history = {props.history}
        />
      }/>
      <Route exact path='/signup' render={(props) => 
            <SignupPage
              history = {props.history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />      
      }/>

      <Route exact path='/login' render={(props) => 
            <LoginPage
              history = {props.history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
      }/>
</Switch>
      </div>
    );
  }
}


export default App;
