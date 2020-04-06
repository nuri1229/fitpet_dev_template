import { RouteModel } from '../../entires/model';
import { RootPage } from './pages';

export const rootRoute: RouteModel[] = [
  {
    name: '루트 페이지',
    path: '/',
    component: RootPage,
    exact: true
  }
]