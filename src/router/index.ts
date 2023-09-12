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
          path: "projects/detail/:id",
          name: "detail",
          meta: {
            isShow: true,
            title: "index",
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
        },
        {
          path: "myhub",
          name: "myhub",
          meta: {
            isShow: true,
            title: "index",
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/MyHub.vue"),
            children:[
              {
                path: "transactions",
                name: "transactions",
                meta: {
                  isShow: true,
                  title: "index",
                },
                component: () =>
                  import(/* webpackChunkName: "about" */ "../hubpages/Transactions.vue"),
              },
              {
                path: "messages",
                name: "messages",
                meta: {
                  isShow: true,
                  title: "index",
                },
                component: () =>
                  import(/* webpackChunkName: "about" */ "../hubpages/Messages.vue"),
              },
              {
                path: "bids_and_offers",
                name: "bids_and_offers",
                meta: {
                  isShow: true,
                  title: "index",
                },
                component: () =>
                  import(/* webpackChunkName: "about" */ "../hubpages/BidsOffers.vue"),
              },
              {
                path: "paymentdetails",
                name: "PaymentDetails",
                meta: {
                  isShow: true,
                  title: "index",
                },
                component: () =>
                  import(/* webpackChunkName: "about" */ "../hubpages/PaymentDetails.vue"),
              },
              {
                path: "settings",
                name: "settings",
                meta: {
                  isShow: true,
                  title: "index",
                },
                component: () =>
                  import(/* webpackChunkName: "about" */ "../hubpages/Settings.vue"),
              },
            ]
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