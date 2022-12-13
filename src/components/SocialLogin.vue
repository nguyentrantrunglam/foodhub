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
    <div class="button-login-email">Start with email or phone</div>
    <div class="have-account">
      Already have an account? <span>Sign In</span>
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
  .button-login-email {
    font-weight: 500;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    color: #fefefe;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ffffff;
    border-radius: 30px;
    padding: 18px 0px 19px 0px;
    margin-top: 23px;
    cursor: pointer;
  }
  .have-account {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #fefefe;
    text-align: center;
    margin-top: 28px;
    span{
      text-decoration: underline;
      cursor: pointer;
      font-weight: 500;
    }
  }
}
</style>
