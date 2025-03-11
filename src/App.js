import React, { Component } from 'react'
import ScrollToTopButton from './components/layout/ScrollToTopButton';
import Description from './components/Description';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <ScrollToTopButton />
        <Description />
        <Projects />
        <AboutMe />
        <Footer />
      </main>
    )
  }
}

export default App;
