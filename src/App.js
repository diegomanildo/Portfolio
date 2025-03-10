import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Menu from './components/Menu';

import './App.css';

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </main>
    )
  }
}

export default App;
