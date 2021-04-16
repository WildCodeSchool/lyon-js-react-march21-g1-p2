import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Index';

// import Main from './components/Main';
import Footer from './components/Footer';
// import Header from './components/Header';

import Home from './screens/HomePage';
import Contact from './screens/ContactAboutPage';
import Order from './screens/OrderPage';
import SignUp from './screens/SignUpPage';
import SignIn from './screens/SignInPage';
import FavoriteFood from './screens/FavoriteFoodPage';
import CustomizedFood from './screens/CustomizedFoodPage';
import PredefinedFood from './screens/PredefinedFoodPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/order" exact component={Order} />
        <Route path="/order/fav-pizza" exact component={FavoriteFood} />
        <Route path="/order/create-pizza" exact component={CustomizedFood} />
        <Route path="/order/pizza-list" exact component={PredefinedFood} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  );
}
