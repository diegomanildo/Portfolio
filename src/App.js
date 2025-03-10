import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </main>
    )
  }
}

export default App;
