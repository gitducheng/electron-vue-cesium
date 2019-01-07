import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/mapControll',
      name: 'mapControll',
      component: require('@/components/mapControll').default
    },
    {
      path: '/cesium',
      component: require('@/components/cesium').default
    },
    {
      path: '/ktMap',
      component: require('@/components/ktMap').default
    }
  ]
})
