import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllRoutes from './routes';
import RoutesInterface from './typed';

const Routes = () => (
  <Switch>
    {AllRoutes.map((route: RoutesInterface) => (
      <Route
        key={route.id}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ))}
  </Switch>
);
export default Routes;
