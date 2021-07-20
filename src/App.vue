<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/login">login</router-link>|
      <router-link to="/video">video</router-link>
    </div> -->
    <!-- 创建路由组件的占位 -->
    <!-- <router-view />
    <component-a></component-a>
    <component-b></component-b> -->
    <h1>Vuex</h1>
    <!-- count: {{$store.state.count}}
    msg: {{$store.state.msg}} -->
     count: {{num}}
    msg: {{message}}
    <h2>Getter</h2>
    reverseMsg: {{reverseMsg}}
    <!-- reverseMsg: {{$store.getters.reverseMsg}} -->

    <h2>Mutation</h2>
    <!-- <button @click="$store.commit('increment', 8)">mutations</button> -->
    <button @click="increment(8)">mutations</button>

     <h2>Action</h2>
    <!-- <button @click="$store.dispatch('incrementAsync', 5)">actions</button> -->
    <button @click="incrementAsync(6)">actions</button>

    <h2>module</h2>
     <!-- products: {{$store.state.products.list}}
    <button @click="$store.commit('setProducts', [])">actions</button> -->
     products: {{list}}
    <button @click="setProducts([])">actions</button>

    <h2>strict</h2>
    <button @click="$store.state.msg='cookie'">strict</button>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
  computed: {
    //count: state => state.count
    // ...mapState(['count', 'msg'])
    ...mapState({
      num: 'count',
      message: 'msg'
    }),
    ...mapState('products', ['list']),
    ...mapGetters(['reverseMsg'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync']),
    ...mapMutations('products', ['setProducts'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
