<template>
<div class="vuex">
    <h1>Vuex</h1>
    count: {{$store.state.count}}
    msg: {{$store.state.msg}}
   <h2>Getter</h2>
    reverseMsg: {{$store.getters.reverseMsg}}
    <h2>Mutation</h2>
    <button @click="$store.commit('increment', 8)">mutations</button>
    <h2>Action</h2>
    <button @click="$store.dispatch('incrementAsync', 5)">actions</button>
</div>  

</template>
