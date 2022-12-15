.
<template>
  <div class="circle">
    <div
      v-for="(item, value) in icons"
      :key="item.id"
      class="square"
      :class="`square-${value + 1}`"
    >
      <img :src="require(`@/assets/ic-${item.name}.svg`)" alt="" />
    </div>
    <div class="small-circle">
      <div><div :class="`onboard-img-onboarding${imageNumber}`"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      required: true,
      type: Array,
    },
    imageNumber: {
      default: 1,
    },
  },
  created() {},
  methods: {},
  computed: {},
};
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
    // background: #ffffff;
    z-index: 2;
    background-position: center;
  }
  .square-1 {
    border-radius: 16px;
    height: 57px;
    width: 57px;
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
    left: 140px;
    bottom: 27px;
  }

  .small-circle {
    position: absolute;
    bottom: 42px;
    left: 42px;
    background: #c4c4c4;
    width: 226px;
    height: 226px;
    border-radius: 50%;
    .onboard-img-onboarding1 {
      width: 226px;
      height: 302px;
      position: absolute;
      bottom: 0px;
      background-image: url("@/assets/onboarding1.svg");
    }
    .onboard-img-onboarding2 {
      width: 340px;
      height: 285px;
      position: absolute;
      bottom: 0px;
      left: -40px;
      bottom: -24px;
      background-image: url("@/assets/onboarding2.svg");
    }
    .onboard-img-onboarding3 {
      width: 226px;
      height: 285px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      bottom: 17px;
      background-image: url("@/assets/onboarding3.svg");
    }
  }
}
</style>
