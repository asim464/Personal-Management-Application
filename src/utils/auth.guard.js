import { isAuthGuardActive } from "../constants/config";
import { setCurrentUser, getCurrentUser } from ".";

var user = getCurrentUser();

export default (to, from, next) => {
  if (to.matched.some((record) => record.meta.loginRequired)) {
    if (user != null) {
      const roleArrayHierarchic = to.matched
        .filter((x) => x.meta.roles)
        .map((x) => x.meta.roles);
      if (roleArrayHierarchic.every((x) => x.includes(user.role))) {
        next();
      } else {
        next("/unauthorized");
      }
    } else {
      setCurrentUser({
        title: "None",
        roles: "None",
      });
      next("/user/login");
    }
  } else {
    next();
  }
};
