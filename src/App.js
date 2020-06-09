import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Hello, I'm{' '}
        <a
          href='https://www.linkedin.com/in/joebgallegos/'
          style={{ textDecoration: 'none' }}>
          Joe
          </a>
      </h1>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <p>I build software.</p>
        <p>I like dogs.</p>
        <p>I live in Texas.</p>
      </div>
    </div>
  );
}

export default App;
