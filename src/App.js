import React, { Component } from 'react';
import './css/main.css';
import './css/years.css';
import Main from './components/main'
import Years from './components/years'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Main/>
        <Years/>
      </div>
    );
  }
}

export default App;
