<template>
  <div>
    <div>
      <img width="25%" src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div>footer</div>
  </div>
</template>
<script>
export default {
  name: "layout",
};
</script>
<style scoped>
</style>