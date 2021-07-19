<template>
  <div>
    <h1>ref parent</h1>
    <child ref="c"></child>
  </div>
</template>
<script>
import child from "./04-Child";
export default {
  components: {
    child,
  },
  mounted() {
    this.$refs.c.focus();
    this.$refs.c.value = "hello ref";
  },
};
</script>