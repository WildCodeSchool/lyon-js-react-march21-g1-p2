import { Switch, Route } from 'react-router';

import Home from '../screens/HomePage';
import Contact from '../screens/ContactAboutPage';
import Order from '../screens/OrderPage';
import SignUp from '../screens/SignUpPage';
import SignIn from '../screens/SignInPage';
import FavoriteFood from '../screens/FavoriteFoodPage';
import CustomizedFood from '../screens/CustomizedFoodPage';
import PredefinedFood from '../screens/PredefinedFoodPage';
import OrderConf from '../screens/ConfirmationPage';
import OrdersRecap from '../screens/OrdersRecap';
import Test from '../screens/Test';

export default function Main() {
  return (
    <main>
      <Switch>
        <Switch>
          <Route path="/test" exact component={Test} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/order/fav-pizza" exact component={FavoriteFood} />
          <Route path="/order/create-pizza" exact component={CustomizedFood} />
          <Route path="/order/pizza-list" exact component={PredefinedFood} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/order/confirmation" exact component={OrderConf} />
          <Route path="/order/ordersrecap" exact component={OrdersRecap} />
        </Switch>
      </Switch>
    </main>
  );
}
