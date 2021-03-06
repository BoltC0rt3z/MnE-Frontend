import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RequireAuth from '../hoc/authHoc';
import ConnectedLogin from '../views/Login';

import MainLayout from '../hoc/Layout';
import AllRoutes from './routes';
import RoutesInterface from './typed';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ConnectedLogin} />
    <MainLayout>
      {AllRoutes.map((route: RoutesInterface) => (
        <Route
          key={route.id}
          path={route.path}
          component={RequireAuth(route.component)}
          exact={route.exact}
        />
      ))}
    </MainLayout>
  </Switch>
);
export default Routes;
