import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  //   {
  //   id: "piaf",
  //   icon: "iconsminds-administrator",
  //   label: "menu.piaf_lbl",
  //   to: `${adminRoot}/piaf`,
  //   roles: [UserRole.SuperAdmin, UserRole.Admin],
  //   subs: [{
  //     icon: "simple-icon-paper-plane",
  //     label: "menu.dashboard",
  //     to: `${adminRoot}/piaf/Dashboard`,
  //   },
  //   {
  //     icon: "simple-icon-list",
  //     label: "menu.user",
  //     to: `${adminRoot}/piaf/UsersListingView`,
  //   },
  //   {
  //     icon: "iconsminds-home-1",
  //     label: "menu.agency",
  //     to: `${adminRoot}/piaf/Agency`,
  //   }
  //   ]
  // },
  {
    id: "analytics",
    icon: "simple-icon-pie-chart",
    label: "menu.dashboard",
    to: `${adminRoot}/piaf/Dashboard`,
  },
  {
    id: "details",
    icon: "iconsminds-home-1",
    label: "menu.agency",
    to: `${adminRoot}/piaf`,
    roles: [UserRole.SuperAdmin, UserRole.Admin],
    subs: [
      {
        icon: "simple-icon-info",
        label: "menu.Agency",
        to: `${adminRoot}/piaf/Agency`,
      },
      {
        icon: "simple-icon-people",
        label: "menu.user-list",
        to: `${adminRoot}/piaf/UsersListingView`,
      },
    ],
  },
  {
    id: "second-menu",
    icon: "iconsminds-box-with-folders",
    label: "menu.property",
    to: `${adminRoot}/second-menu/PropertiesListing`,
    roles: [
      UserRole.SuperAdmin,
      UserRole.Admin,
      UserRole.Agent,
      UserRole.Customer,
    ],
  },
  {
    id: "settings",
    icon: "simple-icon-settings",
    label: "menu.settings",
    to: `${adminRoot}/settings`,
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/user/login",
    subs: [
      {
        icon: "simple-icon-user-following",
        label: "menu.login",
        to: "/user/login",
        newWindow: true,
      },
      // {
      //   icon: "simple-icon-user-follow",
      //   label: "menu.register",
      //   to: "/user/register",
      //   newWindow: true
      // },
      {
        icon: "simple-icon-user-unfollow",
        label: "menu.forgot-password",
        to: "/user/forgot-password",
        newWindow: true,
      },
      // {
      //   icon: "simple-icon-user-following",
      //   label: "menu.reset-password",
      //   to: "/user/reset-password",
      //   newWindow: true
      // }
    ],
  },
  {
    id: "single",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.single",
    to: `${adminRoot}/single`,
  },
  // {
  //   id: "docs",
  //   icon: "iconsminds-library",
  //   label: "menu.docs",
  //   to: "https://piaf-vue-docs.coloredstrategies.com/",
  //   newWindow: true
  // }
];
export default data;
