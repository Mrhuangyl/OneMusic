import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'router/Routers/recommend.js'
import rank from 'router/Routers/rank.js'
import singer from 'router/Routers/singer.js'

Vue.use(Router)

const Search = resolve => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    { path: '/', redirect: '/recommend' },
    recommend,
    rank,
    singer,
    {
      path: '/search',
      component: Search
    }
  ]
})