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
  {
    path: '/sos',
    component: lazy(() => import('@/pages/Sos')),
  },
];

export default routes;
