import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {

  // handleButtonClick() {
  //   console.log(this);
  // }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
