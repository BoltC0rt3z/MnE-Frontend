import Users from '../views/UsersTable';
import RoutesInterface from './typed';

const routes: RoutesInterface[] = [
  {
    path: '/dashboard',
    exact: true,
    component: Users,
    id: 'home',
  },
];

export default routes;
