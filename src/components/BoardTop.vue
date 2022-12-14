.
<template>
  <div class="circle">
    <div class="square square-1"></div>
    <div class="square square-2"></div>
    <div class="square square-3"></div>
    <div class="square square-4"></div>
    <div class="square square-5"></div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.circle {
  width: 310px;
  height: 310px;
  border: 1px solid #fe724c;
  margin-left: 13px;
  border-radius: 50%;
  margin-top: 86px;
  margin-bottom: 60px;
  position: relative;
  .square {
    position: absolute;
    background: #c4c4c4;
    z-index: 2;
  }
  .square-1 {
    border-radius: 16px;
    height: 56px;
    width: 56px;
    left: 209px;
    bottom: 267px;
  }
  .square-2 {
    border-radius: 16px;
    height: 38px;
    width: 38px;
    left: 28px;
    top: 97px;
  }
  .square-3 {
    border-radius: 10px;
    height: 42px;
    width: 42px;
    left: 237px;
    bottom: 88px;
  }
  .square-4 {
    border-radius: 16px;
    height: 56px;
    width: 56px;
    left: 27px;
    bottom: 8px;
  }
  .square-5 {
    border-radius: 10px;
    height: 31px;
    width: 31px;
    left:140px;
    bottom: 27px;
  }
}
</style>
