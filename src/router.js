import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '~/views/Timeline'
import Profile from '~/views/Profile'

Vue.use(Router)

export const options = {
  routes: [
    {
      path: '/',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
}

export default new Router(options)
