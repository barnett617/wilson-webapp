const routes = [
  { path: "/", component: () => import("../pages/Home.vue") },
  { path: "/detail", component: () => import("../pages/Detail.vue") },
];

export default routes;
