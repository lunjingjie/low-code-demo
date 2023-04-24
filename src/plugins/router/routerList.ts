const routeList = [
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('/@/pages/common/login/loginPage.vue'),
  },
  {
    path: '/template',
    name: 'templatePage',
    component: () => import('/@/pages/template/templatePage.vue'),
  },
];
export default routeList;
