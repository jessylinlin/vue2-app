<template>
  <div>blog页面 {{ id }} {{ $route.params.id }}</div>
</template>
<script>
export default {
  name: "Blog",
  props: ["id"],
};
</script>
