import AppPage from "../layout/index.vue";
import ListPage from "../pages/list.vue";
import CreatePage from "../pages/create.vue";
import DetailsPage from "../pages/details.vue";

export default [
  {
    path: "/app",
    name: "app",
    redirect: "/app/orders",
    component: AppPage,
    meta:{
      isAuth:true
    },
    children: [
      {
        path: "orders",
        component: ListPage,
        name: "orders",
      },
      {
        path: "create",
        component: CreatePage,
        name: "create",
      },
      {
        path: "orders/:id",
        component: DetailsPage,
        name: "details",
      },
      
    ],
  },
];
