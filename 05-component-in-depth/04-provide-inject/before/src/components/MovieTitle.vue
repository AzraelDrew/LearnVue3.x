<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
