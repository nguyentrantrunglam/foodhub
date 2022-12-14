<template>
  <div class="social-login">
    <div class="header">
      <div class="divider"></div>
      <div class="title">{{ socialLogin.title }}</div>
      <div class="divider"></div>
    </div>
    <div class="group-buttons">
      <SocialButton
        v-for="button in socialLogin.buttons"
        :key="button.id"
        :button="button"
      ></SocialButton>
    </div>

  </div>
</template>

<script>
import SocialButton from "@/components/SocialButton";
export default {
  components: {
    SocialButton,
  },
  props: {
    socialLogin: {
      type: Object,
    },
  },
};
</script>

.
<style lang="scss" scoped>
.social-login {
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .title {
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: #ffffff;
      margin: 0px 22px;
    }
    .divider {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      width: 89px;
      margin-bottom: 5px;
    }
  }
  .group-buttons {
    display: flex;
    gap: 15px;
    margin-top: 19px;
  }
  
}
</style>
