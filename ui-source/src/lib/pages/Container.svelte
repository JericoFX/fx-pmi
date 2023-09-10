<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from '../utils/routes';
</script>

<main class=" text-white absolute right-0 w-50vw h-full p-3 containers">
  <Router {routes} />
</main>
