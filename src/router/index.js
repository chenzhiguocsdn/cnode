import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleCom from '../views/ArticleCom.vue'
import UserCom from '../views/UserCom.vue'
import MainSec from '../views/MainSec.vue'
import SideSec from '../views/SideSec.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RootPath',
    components: {
      main: MainSec
    }
  }, {
    path: '/topic/:id',
    name: 'ArticleRoute',
    components: {
      main: ArticleCom,
      side: SideSec
    }
  }, {
    path: '/user/:name',
    name: 'UserRoute',
    components: {
      main: UserCom
    }
  }, {
    path: '/user/:name',
    redirect: '/user:name'
  }
]

const router = new VueRouter({
  routes
})

export default router
