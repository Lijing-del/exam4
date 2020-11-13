import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Friend from '@/view/Friend'
import My from '@/view/My'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/home"
    }, {
      path: "/home",
      name: 'Home',
      component: Home
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  mode:"history"
})
