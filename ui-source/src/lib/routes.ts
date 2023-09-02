import { lazy } from 'solid-js';
import Officers from '@/pages/Officers';
import Vehicles from '@/pages/Vehicles';
import Sos from '@/pages/Sos';
const routes = [
  {
    path: '/',
    component: Officers,
  },
  {
    path: '/vehicles',
    component: Vehicles,
  },
  {
    path: '/sos',
    component: Sos,
  },
];

export default routes;
