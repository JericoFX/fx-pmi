import { lazy } from 'solid-js';

const routes = [
  {
    path: '/',
    component: lazy(() => import('@/pages/Officers')),
  },
  {
    path: '/vehicles',
    component: lazy(() => import('@/pages/Vehicles')),
  },
];

export default routes;
