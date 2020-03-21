import SideBar from '../components/SideBar/SideBar';
import RoutesInterface from './typed';

const routes: RoutesInterface[] = [
  {
    path: '/',
    exact: true,
    component: SideBar,
    id: 'home',
  },
];
export default routes;
