import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardContainer from './Dashboard/DashboardContainer.js'
import LoginContainer from './Login/LoginContainer';

class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
        {/* <DashboardContainer /> */}
      </div>
    );
  }
}

export default App;
