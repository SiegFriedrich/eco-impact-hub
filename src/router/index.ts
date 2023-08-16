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
        name: "base",
        meta: {
          isShow: true,
          title: "index",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
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
          },
          {
            path: "/detail",
            name: "detail",
            meta: {
              isShow: true,
              title: "skills",
            },
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
          },
        ]
      },
      
    ],
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