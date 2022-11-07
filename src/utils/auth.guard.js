import store from '../store';
import { setCurrentUser, getCurrentUser } from '.'
export default (to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (store.state.isAuthGuardActive) {
      const user = getCurrentUser();
      if (user) {
        const roleArrayHierarchic = to.matched.filter(x => x.meta.roles).map(x => x.meta.roles);
        if (roleArrayHierarchic.every(x => x.includes(user.role))) {
          next();
        } 
      } else if (user.role == null) {
        next('/unauthorized')
      }
       else {
        setCurrentUser(null);
        next('/user/login')
      }
    } else {
      next();
    }
  } else {
    next()
  }
}
