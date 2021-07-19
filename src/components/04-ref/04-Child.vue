<template>
  <div>
    <h1>ref child</h1>
    <input ref="input" type="text" v-model="value" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>