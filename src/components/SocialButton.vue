<template>
  <div class="button">
    <div class="logo"></div>
    <div class="name">FACEBOOK</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 14px 11px 12px;
  background-color: #fff;
  border-radius: 27px;
  width: 140px;
  cursor: pointer;
  .logo {
    width: 29px;
    height: 29px;
    background: #000;
    border-radius: 50%;
  }
  .name {
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.05em;
    color: #000000;
  }
}
</style>
