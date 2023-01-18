import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hand_craft",
    name: "Handcraft",
    component: () => import("../views/Handcraft"),
  },
  {
    path: "/categories",
    name: "Category",
    component: () => import("../views/Categories"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && localStorage.access_token) next(false);
  else if (to.name !== "Login" && !localStorage.access_token)
    next({ name: "Login" });
  else next();
});

export default router;
