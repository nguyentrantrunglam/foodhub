<template>
  <div class="input-form">
    <div class="name">Full name</div>
    <div class="input">
      <input type="text" placeholder="Your email or phone" />
      <div class="eye"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-form {
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #adadb8;
    margin-bottom: 12px;
  }
  .input {
    padding: 20px 0px 20px 20px;
    border-radius: 10px;
    background: #393948;
    // border: 1px solid #fe724c;
    display: flex;
    max-height: 65px;
    input {
      font-weight: 500;
      font-size: 17px;
      line-height: 17px;
      color: #ffffff;
      height: 17px;
      background: #393948;
      outline: none;
      border: none;
    }
  }
}
</style>
