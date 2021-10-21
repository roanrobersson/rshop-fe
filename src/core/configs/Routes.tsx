import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { MainNavbar, Footer } from 'core/components';

const Routes = () => (
  <Router>
    <MainNavbar />
    <Switch>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
