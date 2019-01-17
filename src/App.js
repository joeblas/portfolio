import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello, I'm{' '}
          <a
            href='https://www.linkedin.com/in/joebgallegos/'
            target='_blank' rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}>
             Joe
          </a>.
        </h1>
        <p>I build software.</p>
        <p>I spend a lot of my time using React and Redux for building robust UIs and ASP.NET Core for RESTful APIs.</p>
        <p>Send me an email: joebgallegos@gmail.com.</p>
      </div>
    );
  }
}

export default App;
