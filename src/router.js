import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import PrimeiraEdicao from './components/PrimeiraEdicao/PrimeiraEdicao.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/primeira-edicao',
    name: 'PrimeiraEdicao',
    component: PrimeiraEdicao
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
