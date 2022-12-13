<template>
  <div class="loading-app">
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingApp",
};
</script>

<style lang="scss" scoped>
.loading-app {
  background: #fe724c;
  width: 375px;
  padding: calc((812px - 163px) / 2) 0px;
  .logo {
    background-image: url("@/assets/logo.svg");
    width: 182px;
    height: 163px;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
  }
}
</style>
