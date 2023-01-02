// Composables
import { createRouter, createWebHistory } from "vue-router";
import SignView from "@/views/SignView.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sign",
    component: SignView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
