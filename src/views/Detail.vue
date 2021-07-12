<template>
  <div>detail页面 {{ id }} {{ $route.params.id }}</div>
</template>
<script>
export default {
  name: "Detail",
  props: ["id"],
};
</script>
