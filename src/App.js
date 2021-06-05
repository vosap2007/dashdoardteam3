import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import routes from './routes';
// import Landing from './pages/Landing/Landing';
// import CardPage from './pages/CardPage';
// import NotFoundPage from "./pages/NotFound";
// import AppBar from './components/AppBar/AppBar'
import './App.css';
import './fonts.css';
// import AddButton from './component/addButton/button';

const Landing = lazy(() =>
  import(
    './pages/Landing/Landing.js' /*webpackChunkName: "landing-page"*/
  ),
);
const CardPage = lazy(() =>
  import(
    './pages/CardPage.js' /*webpackChunkName: "card-page"*/
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFound.js' /*webpackChunkName: "notFound-page"*/
  ),
);

const App = () => (
  <>
    {/* //       <AddButton/> */}
    {/* //       <Landing/> */}

    {/* <NavLink to={routes.card} > Card</NavLink> */}
    <Suspense fallback={<h1>Loader...</h1>}>
      <Switch>
        <Route
          exact
          path={routes.landing}
          component={Landing}
        />
        <Route path={routes.card} component={CardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
