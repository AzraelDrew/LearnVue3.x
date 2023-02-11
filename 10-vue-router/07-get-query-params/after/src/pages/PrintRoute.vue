<template>
  <main>
    {{ $route.query }}
  </main>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.query);
  },
};
</script>
<style scoped>
h2 {
  margin-bottom: 12px;
  font-size: 32px;
}
</style>
