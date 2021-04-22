import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Index';

import Main from './components/Main';
import Footer from './components/Footer';
// import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}
