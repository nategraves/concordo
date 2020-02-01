<script>
  import { Navigate } from 'svelte-router-spa';
</script>

<style>
  button {
    border: 0;
    margin-top: 2rem;
    transition: 300ms all ease-in-out;
  }

  button:hover {
    background: #1e1e1e1e;
  }
</style>

<Navigate to="/projects/create">
  <button>Create</button>
</Navigate>
<h3>Your projects:</h3>