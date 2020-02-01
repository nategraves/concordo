<script>
  import { Navigate } from 'svelte-router-spa';
</script>

<style>
  header {
    display: flex;
    align-items: baseline;
    border-bottom: 3px solid #1e1e1e;
    padding-bottom: 0.25rem;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0 2rem 0 0;
    color: #1e1e1e;
  }

  span {
    color: #1e1e1e;
    text-transform: uppercase;
    font-size: 1rem;
    transition: 250ms all ease-in-out;
  }

  span:visited,
  span:hover {
    color: #1e1e1ee1;
    text-decoration: none;
  }
</style>

<header>
  <Navigate to="/">
    <h3>Concordo</h3>
  </Navigate>
  <Navigate to="/projects/">
    <span>Projects</span>
  </Navigate>
</header>