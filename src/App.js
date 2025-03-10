import React, { Component } from 'react'
import ScrollToTopButton from './components/layout/ScrollToTopButton';
import Description from './components/Description';
import Projects from './components/Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <ScrollToTopButton />
        <Description />
        <Projects />
      </main>
    )
  }
}

export default App;
