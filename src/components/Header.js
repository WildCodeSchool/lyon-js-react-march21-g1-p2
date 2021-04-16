import React from 'react';
// eslint-disable-next-line import/order
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../screens/HomePage';
import Contact from '../screens/ContactAboutPage';
import Order from '../screens/OrderPage';
import SignUp from '../screens/SignUpPage';
import SignIn from '../screens/SignInPage';
import FavoritPizzas from '../screens/FavoriteFoodPage';
import CreatePizza from '../screens/CustomizedFoodPage';
import ListOfPizzas from '../screens/PredefinedFoodPage';

export default function Header() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/order" exact component={Order} />
        <Switch>
          <Route path="/order/fav-pizza" exact component={FavoritPizzas} />
          <Route path="/order/create-pizza" exact component={CreatePizza} />
          <Route path="/order/pizza-list" exact component={ListOfPizzas} />
        </Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
    </Router>
  );
}
