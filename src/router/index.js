import Vue from 'vue';
import Router from 'vue-router';
import ThreadView from '@/components/ThreadView';
import SubchaalView from '@/components/SubchaalView';
import SubchaalsView from '@/components/SubchaalsView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/subchaals',
      name: 'subchaals',
      component: SubchaalsView,
    },
    {
      path: '/subchaal/:subchaalId',
      name: 'subchaal',
      component: SubchaalView,
      props: true,
    },
    {
      path: '/thread/:threadId',
      name: 'thread',
      component: ThreadView,
      props: true,
    },
  ],
});
