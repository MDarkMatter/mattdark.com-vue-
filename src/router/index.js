import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Music from '@/components/music/Music.vue'
import Data from '@/components/dataviz/Data.vue'
import Photography from '@/components/photography/Photography.vue'
import Etc from '@/components/etc/ETC.vue'
import Instagram from '@/components/instagram/Insta.vue'
import Abqart from '@/components/dataviz/abqart/Art.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography
    },
    {
      path: '/etc',
      name: 'Etc',
      component: Etc
    },
    {
      path: '/insta',
      name: 'Instagram',
      component: Instagram
    },
    {
      path: '/abqart',
      name: 'Abqart',
      component: Abqart
    }
  ]
})
