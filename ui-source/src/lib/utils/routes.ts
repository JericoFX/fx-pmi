import Officers from '../../pages/Officers.svelte';

const routes = {
  // Exact path
  '/': Officers,

  // // Using named parameters, with last being optional
  // '/author/:first/:last?': Author,

  // // Wildcard parameter
  // '/book/*': Book,

  // // Catch-all
  // // This is optional, but if present it must be the last
  // '*': NotFound,
};

export default routes;
