import Index from "./pages/Index.svelte";
import ProjectList from "./pages/projects/ProjectList.svelte";
import ProjectCreate from "./pages/projects/ProjectCreate.svelte";
import MainLayout from "./layouts/main.svelte";

const routes = [
  {
    name: "/",
    component: Index,
    layout: MainLayout
  },
  {
    name: "projects",
    component: MainLayout,
    nestedRoutes: [
      { name: "index", component: ProjectList },
      { name: "create", component: ProjectCreate }
    ]
  }
];

export { routes };
