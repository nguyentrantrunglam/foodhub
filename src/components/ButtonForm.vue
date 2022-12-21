<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: "ButtonForm",
  props: {
    name: {
      default: "Sign up",
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: #fe724c;
  box-shadow: 0px 10px 30px rgba(254, 114, 76, 0.2);
  border-radius: 28.5px;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-transform: uppercase;
  padding: 23px 75px 22px 76px;
  border: none;
  cursor: pointer;
  width: 248px;
  text-align: center;
}
</style>
