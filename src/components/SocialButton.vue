<template>
  <div class="button">
    <div class="logo" :class="button.class"></div>
    <div class="name">{{button.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      default: { id: 1, name: "facebook", class: "facebook" },
      require: true,
    },
  },
};
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
    background-position: center;
  }
  .name {
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.05em;
    color: #000000;
    text-transform: uppercase;
  }
  .facebook {
    background: url("@/assets/icon-facebook.svg");
  }
  .google {
    background: url("@/assets/icon-google.svg");
  }
}
</style>
