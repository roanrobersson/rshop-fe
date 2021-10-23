import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { MainNavbar, Footer } from 'core/components';
import { HOME } from './routeKeys';
import { Home } from 'pages';

const Routes = () => (
  <Router>
    <MainNavbar />
    <Switch>
      <Route path={HOME} exact>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
