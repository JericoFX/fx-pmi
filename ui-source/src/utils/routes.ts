import { wrap } from 'svelte-spa-router/wrap';
import Officers__SvelteComponent_ from '../pages/Officers.svelte';
//Load async the pages
export default {
  '/': Officers__SvelteComponent_,
  '/people': wrap({
    asyncComponent: () => import('../pages/People.svelte'),
  }),
};
