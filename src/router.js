import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import PrimeiraEdicao from './components/PrimeiraEdicao/PrimeiraEdicao.vue';
import Patrocinio from './components/PrimeiraEdicao/Paginas/Patrocinio.vue';

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
  },
  {
    path: '/primeira-edicao/patrocinio',
    name: 'Patrocinio',
    component: Patrocinio
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
