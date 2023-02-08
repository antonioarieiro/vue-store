import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import('../views/home/Home.vue') },
  { path: "/categorie/:id", component: () => import('../views/categorie/Categorie.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
