import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Frame28688buttoninput from './views/frame28688buttoninput'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Frame28688buttoninput',
      path: '/',
      component: Frame28688buttoninput,
    },
  ],
})
