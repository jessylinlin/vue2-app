import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Layout from '../components/Layout.vue'
//注册路由组件
//vue.use 注册插件， 接受参数， 参数为函数或者对象，对象有个install方法
Vue.use(VueRouter)

//路由规则
const routes = [
  //嵌套路由
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        component: Index
      },
      {
        name: 'detail',
        path: 'detail/:id',
        props: true,
        component: () => import('@/views/Detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: Index
  // },
  {
    path: '/blog/:id',
    name: 'Blog',
    //通过开启props, 会把url中的参数传递组件
    //组件中通过props接收url参数
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

//创建router对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导出路由对象
export default router
