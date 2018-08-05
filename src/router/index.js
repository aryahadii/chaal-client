import Vue from 'vue';
import Router from 'vue-router';
import PostView from '@/components/PostView';
import BranchView from '@/components/BranchView';
import BranchesView from '@/components/BranchesView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/branches',
      name: 'branches',
      component: BranchesView,
    },
    {
      path: '/branch/:branchId',
      name: 'branch',
      component: BranchView,
      props: true,
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: PostView,
      props: true,
    },
  ],
});
