import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'
import cart from './modules/cart'

//注册插件
Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //严格模式,生产环境不建议打开
    state: {
        count: 0,
        msg: 'vuex'
    },
    getters: {
        reverseMsg(state) {
            return state.msg.split('').reverse().join('')
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload
        }
    },
    actions: {
        incrementAsync(context, payload) {
            setTimeout(() => {
                context.commit('increment', payload)
            }, 200);
        }
    },
    modules: {
        products,
        cart
    }
})

export default store