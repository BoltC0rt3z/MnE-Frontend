import Dashboard from '../components/Dashboard';
import RoutesInterface from './typed';

const routes: RoutesInterface[] = [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    id: 'home',
  },
];

export default routes;
