import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "../modules/auth/router/index";
import AppRoutes from "../modules/app/router/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      redirect: "/auth",

      // component: AuthModule,
      children: [...AuthRoutes, ...AppRoutes],
    },
  ],
});
let token;
router.beforeEach((to, form, next) => {
  console.log(to);
  if (to.meta.isAuth) {
     token= JSON.parse(localStorage.getItem("user")).access_token;
    if (token) next();
    else return "/auth";
  } else {
    next();
    console.log('not')
  }
  next()
});

export default router;
