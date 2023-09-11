import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect:"/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Base.vue"),
    children: [
        {
          path: "/",
          name: "projects",
          meta: {
            isShow: true,
            title: "index",
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
            children:[

            ]
        },
        {
          path: "/projects/detail/:id",
          name: "detail",
          meta: {
            isShow: true,
            title: "index",
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
        },
        {
          path: "/myhub",
          name: "myhub",
          meta: {
            isShow: true,
            title: "index",
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/MyHub.vue"),
        },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router