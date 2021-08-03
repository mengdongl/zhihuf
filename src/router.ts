import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import { computed } from 'vue'
import Index from './views/index.vue'
import Home from './views/home.vue'
import Login from './views/login.vue'
import ColumDetail from './views/columdetail.vue'
import CreatePost from './views/createpost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        { path: '/home', name: 'home', component: Home },
        { path: '/colum/:id', name: 'colum', component: ColumDetail },
        { path: '/create', meta: { requiredLogin: true }, name: 'create', component: CreatePost }
      ]
    },
    { path: '/login', meta: { redirectIfLogin: true }, name: 'login', component: Login }
  ]
})
const user = computed(() => store.state.user)
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !user.value.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectIfLogin && user.value.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router
