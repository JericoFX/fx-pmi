import { wrap } from 'svelte-spa-router/wrap';
import Officers from '../../pages/Officers.svelte';

const routes = {
  // Exact path
  '/': Officers,
  '/vehicle': wrap({
    asyncComponent: () => import('../../pages/Vehicles.svelte'),
  }),
  '/reports': wrap({
    asyncComponent: () => import('../../pages/Reports.svelte'),
  }),
  // // Using named parameters, with last being optional
  // '/author/:first/:last?': Author,

  // // Wildcard parameter
  // '/book/*': Book,

  // // Catch-all
  // // This is optional, but if present it must be the last
  // '*': NotFound,
};

export default routes;
