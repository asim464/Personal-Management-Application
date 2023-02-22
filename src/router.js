import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/user/Login.vue"),
    redirect: `${adminRoot}/user/login`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/piaf`,
    meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "piaf",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/piaf"),
        redirect: `${adminRoot}/piaf/Dashboard`,
        meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
        children: [
          {
            path: "Dashboard",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/piaf/Dashboard"
              ),
            meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
          },
          {
            path: "Agency",
            component: () =>
              import(/* webpackChunkName: "piaf" */ "./views/app/piaf/Agency"),
            meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent] },
          },
          {
            path: "UsersListingView",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/piaf/UsersListingView"
              ),
            meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent] },
          },
        ],
      },
      {
        path: "second-menu",
        component: () =>
          import(
            /* webpackChunkName: "second-menu" */ "./views/app/second-menu"
          ),
        redirect: `${adminRoot}/second-menu/PropertiesListing`,
        meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
        children: [
          {
            path: "PropertiesListing",
            component: () =>
              import(
                /* webpackChunkName: "PropertiesListing" */ "./views/app/second-menu/PropertiesListing"
              ),
            meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
          },
          {
            path: "PropertyDetails",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/second-menu/PropertyDetails"
              ),
            meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent, UserRole.Customer] },
          },
        ],
      },
      {
        path: "settings",
        component: () => import(/* webpackChunkName: "settings" */ "./views/app/settings"),
        meta: { loginRequired: true, roles: [UserRole.SuperAdmin, UserRole.Admin, UserRole.Agent] },
      },
      {
        path: "single",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/single"),
        meta: { loginRequired: true },
      },
    ],
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login"),
      },
      // {
      //   path: "register",
      //   component: () =>
      //     import(/* webpackChunkName: "user" */ "./views/user/Register")
      // },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword"),
      },
      // {
      //   path: "reset-password",
      //   component: () =>
      //     import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      // },
    ],
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error"),
  },
  {
    path: "/unauthorized",
    component: () =>
      import(/* webpackChunkName: "error" */ "./views/Unauthorized.vue"),
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

router.beforeEach(AuthGuard);
export default router;
