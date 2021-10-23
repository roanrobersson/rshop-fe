import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import Footer from 'modules/common/components/Footer';
import MainNavbar from 'modules/common/components/MainNavbar';
import AdminNavbar from 'modules/admin/components/AdminNavbar';
import { HOME, ADMIN } from './routeKeys';
import { Home, Admin } from 'pages';

const HeaderSwitch = () => (
  <Switch>
    <Route path={ADMIN}>
      <AdminNavbar />
    </Route>
    <Route>
      <MainNavbar />
    </Route>
  </Switch>
);

const FooterSwitch = () => (
  <Switch>
    <Route path={ADMIN}></Route>
    <Route>
      <Footer />
    </Route>
  </Switch>
);

const Routes = () => (
  <Router>
    <HeaderSwitch />

    <Switch>
      <Route path={ADMIN}>
        <Admin />
      </Route>
      <Route path={HOME} exact>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>

    <FooterSwitch />
  </Router>
);

export default Routes;
