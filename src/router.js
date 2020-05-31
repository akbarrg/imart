import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/images/:id',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ]
})
