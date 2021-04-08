import { Switch, Route } from 'react-router';
import HomePage from '../screens/HomePage';
import ContactAboutPage from '../screens/ContactAboutPage';
import PredefinedFoodPage from '../screens/PredefinedFoodPage';
import CustomizedFoodPage from '../screens/CustomizedFoodPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={PredefinedFoodPage} />
        <Route exact path="/custo" component={CustomizedFoodPage} />
        <Route exact path="/contact" component={ContactAboutPage} />
      </Switch>
    </main>
  );
}
