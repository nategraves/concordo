<script>
  import { Router, Navigate } from 'svelte-router-spa';

  import Index from "./pages/Index.svelte";
  import ProjectList from "./pages/projects/ProjectList.svelte";
  import ProjectCreate from "./pages/projects/ProjectCreate.svelte";
  import MainLayout from "./layouts/main.svelte";
  import { routes } from './routes';
</script>

<main>
  <Router {routes} />
</main>

<style>
	main {
    padding: 20px;
	}
</style>