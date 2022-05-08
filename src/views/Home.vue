<template>
  <div>
    <el-button
      @click="
        () => {
          $router.push({ name: 'login', query: { id: 1 } });
        }
      "
      >去登录ssss</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>
