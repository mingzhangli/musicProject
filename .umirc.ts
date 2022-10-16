import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    mobile: false
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/users', component: '@/pages/users' },
    { path: '/searchBar', component: '@/components/searchBar' },
  ],
  fastRefresh: {},
});
