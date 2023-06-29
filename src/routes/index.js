import { createRouter, createWebHistory } from 'vue-router';

const routes = [
{
path: '/:catchAll(.*)',
  redirect: '/'

},
{
    path: '/',
    name: "Home",
    component: () => import("../views/HomeView.vue")
},
{
    path: '/BreedInfo/:searchTerm',
    name: "BreedInfo",
    component: () => import("../views/BreedInfo.vue")
},
{
    path: '/topSearch',
    name: "TopSearch",
    component: () => import("../views/TopSearch.vue")
},

]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;