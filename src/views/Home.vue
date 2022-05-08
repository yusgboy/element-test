<template>
  <div>
    <el-button
      @click="
        () => {
          $router.push({ name: 'login', query: { id: 1 } });
        }
      "
      >去登录吧哈哈哈</el-button
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
