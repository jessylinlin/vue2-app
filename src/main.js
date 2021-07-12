import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


const vm = new Vue({
  //注册router对象
  router,
  render: h => h(App)
}).$mount('#app')
console.log(vm)
