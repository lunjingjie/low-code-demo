import { createRouter, createWebHashHistory } from 'vue-router';
import { getSessionValue } from '../../utils/hooks/system/useStorage';
import { setTokenInHeader } from '/@/plugins/axios';
import { useLoginStore } from '/@/stores/login';
import { useLayoutStore } from '/@/stores/layout';
import routeList from './routerList';
import { checkBrowser } from '/@/plugins/browser';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routeList,
  strict: true,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
});

export function resetRouter() {
  router.getRoutes.forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function initRouter(app) {
  app.use(router);
}

router.beforeEach((to, from, next) => {
  const token = getSessionValue('token');
  const storeLogin = useLoginStore();
  const storeLayout = useLayoutStore();
  if (token !== null && storeLogin.token === null && to.name !== 'loginPage') {
    storeLogin.setToken(token);
    setTokenInHeader(token);
  }

  if (
    token === null ||
    to.name === 'basePage' ||
    to.name === 'detailPage' ||
    to.name === 'loginPage'
  ) {
    storeLayout.setShowLayout(false);
  } else {
    storeLayout.setShowLayout(true);
  }

  if (token === null) {
    var routename = null;
    checkBrowser().indexOf('Chrome') < 0 ? (routename = 'incompatible') : (routename = 'loginPage');
    if (to.name !== routename) {
      next({ name: routename });
    } else {
      next();
    }
  } else if (to.name === 'loginPage') {
    next('/template');
  } else {
    next();
  }
});
