import React, { Component } from 'react'
import Description from './components/Description';
import Projects from './components/Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Description />
        <Projects />
      </main>
    )
  }
}

export default App;
