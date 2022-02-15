import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import CrewView from "../views/CrewView.vue";
import DestinationView from "../views/DestinationView.vue";
import HomeView from "../views/HomeView.vue";
import TechnologyView from "../views/TechnologyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/crew",
      name: "crew",
      component: CrewView,
    },
    {
      path: "/destination",
      name: "destination",
      component: DestinationView,
    },
    {
      path: "/technology",
      name: "technology",
      component: TechnologyView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
