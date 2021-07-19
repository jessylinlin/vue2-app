
<template>
  <div>
    <h1>A</h1>
    user name {{ sharedState.user.name }}
    <button @click="change">change info</button>
  </div>
</template>
<script>
import store from "./store";
export default {
  data() {
    return {
      privateState: {},
      sharedState: store.store,
    };
  },
  methods: {
    change() {
      store.setUserNameAction("b");
    },
  },
};
</script>