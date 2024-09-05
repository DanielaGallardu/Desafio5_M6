import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/InicioView.vue';
import Productos from '../views/ProductosView.vue';
import Contacto from '../views/ContactoView.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/productos/:categoria',
    name: 'ProductosCategoria',
    component: Productos,
    props: true
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
