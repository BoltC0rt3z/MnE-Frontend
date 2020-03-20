import test from '../components/test';
import RoutesInterface from './typed';

const routes: RoutesInterface[] = [
  {
    path: '/',
    exact: true,
    component: test,
    id: 'home',
  },
];
export default routes;
