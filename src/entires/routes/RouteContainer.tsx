import React, { FC } from 'react';
import { routes } from './routes';
import { Switch, Route } from 'react-router-dom';


export const RouteContainer: FC = () => (
  <Switch>
    {routes.map((route, idx) => (
      <Route
        key={idx}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
)
