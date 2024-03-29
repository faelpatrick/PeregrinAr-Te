import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import PrimeiraEdicao from './components/PrimeiraEdicao/PrimeiraEdicao.vue';
import Patrocinio from './components/PrimeiraEdicao/Paginas/Patrocinio.vue';
import Etapa1 from './components/PrimeiraEdicao/Etapas/Etapa1.vue';
import Etapa2 from './components/PrimeiraEdicao/Etapas/Etapa2.vue';
import Etapa3 from './components/PrimeiraEdicao/Etapas/Etapa3.vue';
import Etapa4 from './components/PrimeiraEdicao/Etapas/Etapa4.vue';
import Etapa5 from './components/PrimeiraEdicao/Etapas/Etapa5.vue';
import Etapa6 from './components/PrimeiraEdicao/Etapas/Etapa6.vue';
import Etapa7 from './components/PrimeiraEdicao/Etapas/Etapa7.vue';
import Etapa8 from './components/PrimeiraEdicao/Etapas/Etapa8.vue';


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
  },
  {
    path: '/primeira-edicao/patrocinador',
    name: 'Patrocinio',
    component: Patrocinio
  },
  {
    path: '/patrocinio',
    name: 'Patrocinio',
    component: Patrocinio
  },
  {
    path: '/patrocinador',
    name: 'Patrocinio',
    component: Patrocinio
  },
  {
    path: '/etapa-1',
    name: 'Etapa1',
    component: Etapa1
  },
  {
    path: '/etapa-2',
    name: 'Etapa2',
    component: Etapa2
  },
  {
    path: '/etapa-3',
    name: 'Etapa3',
    component: Etapa3
  },
  {
    path: '/etapa-4',
    name: 'Etapa4',
    component: Etapa4
  },
  {
    path: '/etapa-5',
    name: 'Etapa5',
    component: Etapa5
  },
  {
    path: '/etapa-6',
    name: 'Etapa6',
    component: Etapa6
  },
  {
    path: '/etapa-7',
    name: 'Etapa7',
    component: Etapa7
  },
  {
    path: '/etapa-8',
    name: 'Etapa8',
    component: Etapa8
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
