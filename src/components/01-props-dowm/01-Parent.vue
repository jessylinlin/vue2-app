<template>
  <div>
    <h1>props down parent</h1>
    <child title="包黑子"></child>
  </div>
</template>
<script>
import child from "./01-Child";
export default {
  components: {
    child,
  },
};
</script>