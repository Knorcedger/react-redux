import React, { Component } from 'react';
import './App.css';
import HomepageLoginForm from './containers/HomepageLoginForm';

class App extends Component {

  // handleButtonClick() {
  //   console.log(this);
  // }

  render() {
    return (
      <div>
        <HomepageLoginForm />
      </div>
    );
  }
}

export default App;
