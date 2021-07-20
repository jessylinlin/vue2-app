import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ComponentA from './components/05-state/componentA'
import ComponentB from './components/05-state/componentB'

Vue.config.productionTip = false

Vue.component("component-a", ComponentA)
Vue.component("component-b", ComponentB)
const vm = new Vue({
    //注册router对象
    router,
    store,
    render: h => h(App)
}).$mount('#app')
console.log(vm)
console.log(store)