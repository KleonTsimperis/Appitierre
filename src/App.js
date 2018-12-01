import React, { Component } from 'react';
import './App.css';
import UserInteractions from './containers/UserInteractions';
import Feedback from './components/Feedback';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInteractions/>
        <Feedback/>
      </div>
    );
  }
}


export default connect()(App);



