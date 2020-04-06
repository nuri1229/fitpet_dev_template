import { RouteModel } from '../../entires/model';
import { UsersPage } from './pages';

export const userRoute: RouteModel[] = [
  {
    name: '유저 목록',
    path: '/users',
    component: UsersPage,
    exact: true
  }
]