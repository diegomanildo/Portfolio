import React, { Component } from 'react'
import ScrollToTopButton from './components/layout/ScrollToTopButton';
import Description from './components/Description';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Skills from './components/Skills';
import { motion } from "framer-motion";

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <NavBar />
          <Description />
          <Projects />
          <Skills />
          <AboutMe />
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      </main>
    )
  }
}

export default App;
