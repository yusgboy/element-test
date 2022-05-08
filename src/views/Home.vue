<template>
  <div>
    <el-button
      @click="
        () => {
          $router.push({ name: 'login', query: { id: 1 } });
        }
      "
      >登录</el-button
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
