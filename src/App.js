import { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './Component/LoginPage';
import InterviewForm from './Component/InterviewForm';
import RegisterPage from './Component/RegistrationPage';
import HomePage from './Component/HomePage';
import Scheduledinterviews from './Component/ScheduledInterviews';


class App extends Component{
  render(){
    return(
      <>
        <Routes>
          <Route exact path="/loginpage"  Component = {LoginPage} />
          <Route path="/" Component={HomePage} />
          <Route exact path="/registration"  Component = {RegisterPage}/>
          <Route exact path="/scheduleInterview" Component={InterviewForm} />
          <Route exact path="/scheduledinterviews" Component={Scheduledinterviews} />
        </Routes>
      </>
    )  
  }
}

export default App;
