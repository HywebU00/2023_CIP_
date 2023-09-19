// Composables
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/Index.vue"),
    redirect: (to) => {
      return "my-index";
    },
    children: [
      {
        path: "/account/index",
        name: "account-index",
        component: () => import("@/views/system/account/Account.vue"),
      },
      {
        path: "/account/form",
        name: "account-form",
        component: () => import("@/views/system/account/AccountForm.vue"),
      },
      {
        path: "/my-index",
        name: "my-index",
        component: () => import("@/views/main/MainPage.vue"),
      },
      {
        path: "/ui/index",
        component: () => import("@/views/admin/systemComponent.vue"),
      },
      {
        path: "/ui/album",
        component: () => import("@/views/admin/albumComponent.vue"),
      },
      {
        path: "/ui/project",
        component: () => import("@/views/admin/projectComponent.vue"),
      },
      {
        path: "/ui/form",
        component: () => import("@/views/admin/formComponent.vue"),
      },
      {
        path: "/ui/mp",
        component: () => import("@/views/admin/homeComponent.vue"),
      },
      {
        path: "/ui/tree",
        component: () => import("@/views/admin/treeComponent.vue"),
      },
    ],
  },
  {
    path: "/ui-index",
    component: () => import("@/views/indexPage.vue"),
  },
];

export const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
