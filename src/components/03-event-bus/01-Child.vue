<template>
  <div>
    <h1>props doen child</h1>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  // props: ['title']
  props: {
    title: String,
  },
};
</script>