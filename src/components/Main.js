import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import ContactAboutPage from '../screens/ContactAboutPage';
import PredefinedFoodPage from '../screens/PredefinedFoodPage';
import CustomizedFoodPage from '../screens/CustomizedFoodPage';
import FavoriteFoodPage from '../screens/FavoriteFoodPage';
import SignInPage from '../screens/SignInPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frommenu" component={PredefinedFoodPage} />
        <Route exact path="/pizzaperso" component={CustomizedFoodPage} />
        <Route exact path="/favpizza" component={FavoriteFoodPage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/contact" component={ContactAboutPage} />
      </Switch>
    </main>
  );
}
