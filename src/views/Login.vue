<template>
  <div>
    <div>login页面</div>
    <button @click="push">push</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    push() {
      this.$router.push("/");
      // this.$router.push({ name: "Index" });
    },
  },
};
</script>
