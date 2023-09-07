<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from '../utils/routes';
</script>

<main class="absolute right-0 w-50vw h-full p-3">
  <Router {routes} />
</main>
