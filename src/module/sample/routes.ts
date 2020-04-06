import { RouteModel } from '../../entires/model';
import { SamplePage } from './page/';

export const sampleRoute: RouteModel[] = [
  {
    name: '샘플 목록',
    path: '/sample',
    component: SamplePage,
    exact: true
  }
]