import { createRouter, createWebHistory } from 'vue-router';

import PeoplePage from './pages/PeoplePage';
import StarshipsPage from './pages/StarshipsPage';
import PlanetsPage from './pages/PlanetsPage';
import PeopleDetail from './components/PeopleDetail';
import StarshipsDetail from './components/StarshipsDetail';
import PlanetsDetail from './components/PlanetsDetail';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/people',
    },
    {
      path: '/people',
      component: PeoplePage,
    },
    {
      path: '/people-detail',
      name: 'people-detail',
      component: PeopleDetail,
      props: {
        url: true,
      },
    },
    {
      path: '/starships',
      component: StarshipsPage,
    },
    {
      path: '/starships-detail',
      name: 'starships-detail',
      component: StarshipsDetail,
      props: {
        url: true,
      },
    },
    {
      path: '/planets',
      component: PlanetsPage,
    },
    {
      path: '/planets-detail',
      name: 'planets-detail',
      component: PlanetsDetail,
      props: {
        url: true,
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
