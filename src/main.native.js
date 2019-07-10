import Vue from 'nativescript-vue'
import Navigator from 'nativescript-vue-navigator'

import App from './views/Timeline'
import { options } from './router'
import store from './store'

const routes = options.routes.reduce((data, route) => {
  data[route.name] = {
    component: route.component
  }
  return data
}, {})

Vue.use(Navigator, { routes })

Vue.config.silent = false

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
