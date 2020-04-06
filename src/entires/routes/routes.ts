import { userRoute } from '../../module/users/routes';
import { rootRoute } from '../../module/root/routes';
import { RouteModel } from '../model';
import { RouteFailPage } from '../page/RouteFailPage';

const failRoute: RouteModel[] = [
  {
    name: 'fail',
    path: '*',
    component: RouteFailPage
  }
]

export const routes = [
  ...userRoute, 
  ...rootRoute, 
  ...failRoute
];