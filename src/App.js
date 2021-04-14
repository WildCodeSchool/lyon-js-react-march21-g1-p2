import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
// eslint-disable-next-line import/order
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/HomePage';
import Contact from './screens/ContactAboutPage';
import Order from './screens/OrderPage';
import SignUp from './screens/SignUpPage';
import SignIn from './screens/SignInPage';

// import Main from './components/Main';
// import Footer from './components/Footer';
// import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/order" exact component={Order} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
    </Router>
  );
}
